import React, {createContext, useState} from 'react'
import { signInFirebase, signUpFirebase, getUserData } from '../../api/firebase'

export const userContext = createContext()
const {Provider} = userContext

const UserContext = ({children}) => {

    const [authId, setAuthId] = useState(null)

    const signUp = (datosUsuario) => {
        let error
        signUpFirebase(datosUsuario)
            .then(data => setAuthId(data.user.uid))
            .catch(data => error = data)
        return error
    }

    const signIn = (datosUsuario) => {
        let error
        signInFirebase(datosUsuario)
            .then(data => setAuthId(data.user.uid))
            .catch(data => error = data)
        return error
    }

    const getData = async () => {
        const result = await getUserData(authId)
        
        return result
    }

    const values = {
        signUp,
        signIn,
        getData,
        authId
    }

    return(
        <Provider value={{...values}}>
            {children}
        </Provider>
    )
}

export default UserContext