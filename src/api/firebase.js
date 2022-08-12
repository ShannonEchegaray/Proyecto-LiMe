// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"
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