// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, serverTimestamp, addDoc } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB89_TurmZBWMEexPVGRQ4OZia4WfmYLFM",
  authDomain: "react-lime.firebaseapp.com",
  projectId: "react-lime",
  storageBucket: "react-lime.appspot.com",
  messagingSenderId: "246505277650",
  appId: "1:246505277650:web:d9c5824544fbcc1091450b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getItems = async () => {
    const itemsRef = collection(db, "items");
    const q = await getDocs(itemsRef)
    const documents = q.docs.map(el => {return {...el.data(), id: el.id}})

    return documents;
}

export const getItem = async (id) => {
    const itemRef = doc(db, "items", id);
    const q = await getDoc(itemRef)
    const document = {...q.data(), id: q.id}

    return document;
}

export const getCategory = async (category) => {
    const itemsRef = collection(db, "items");
    const queryRef = query(itemsRef, where("category", "==", category))
    const q = await getDocs(queryRef)

    const documents = q.docs.map(el => {return {...el.data(), id: el.id}})
    
    return documents
}

export const addPurchase = async (objectCompra) => {
    const ventasCollection = collection(db, "ventas")
    const refVenta = await addDoc(ventasCollection, {...objectCompra, time: serverTimestamp()})

    return refVenta.id
} 

const saveUserInDB = async (user, firstname, lastname) => {
    const usersCollection = collection(db, "users")
    console.log(user)
    await addDoc(usersCollection, {id: user.uid, email: user.email, nombre: firstname, apellido: lastname})
}

export const signUpFirebase = async ({email, password, firstname, lastname}) => {
    const auth = getAuth()
    const result = await createUserWithEmailAndPassword(auth, email, password)
    saveUserInDB(result.user, firstname, lastname)
    return result;
}

export const signInFirebase = ({email, password}) => {
    let result
    try{
        const auth = getAuth();
        result = signInWithEmailAndPassword(auth, email, password);
    } catch(e){
        console.log(e)
    } finally {
        return result
    }
    
}

export const getUserData = async (id) => {
    const itemsRef = collection(db, "users");
    const queryRef = query(itemsRef, where("id", "==", id))
    const q = await getDocs(queryRef)

    return q.docs[0].data();
}