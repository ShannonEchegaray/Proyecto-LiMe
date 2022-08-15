import React, {useState, useContext} from 'react'
import { userContext } from './UserContext/UserContext'
import { Navigate } from 'react-router-dom'

const SignUp = () => {

    const [formHandler, setFormHandler] = useState({firstname: "", lastname: "", email: "", password: "", confirmPasword: ""})
    const [authState, setAuthState] = useState({success: false, error: false})
    const {signUp} = useContext(userContext)

    const registrarse = (e) => {
        e.preventDefault()
        if(formHandler.confirmPasword !== formHandler.password){
            setAuthState({...authState, error: "Las contraseñas no coinciden"})
            return
        } else if(formHandler.password.length < 6){
            setAuthState({...authState, error: "La contraseña debe ser de mas de 6 caracteres" })
        }
        signUp(formHandler)
        setAuthState({...authState, success: true})
    }

  return (
    <div className='fondoMain'>
        <div className='formContainer'>
            <form className="flex flex-col items-center form" onSubmit={registrarse}>
                <label htmlFor='firstname'>Nombre</label>
                <input type="text" required onChange={(e) => setFormHandler({...formHandler, firstname: e.target.value})} value={formHandler.firstname}/>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" required onChange={(e) => setFormHandler({...formHandler, lastname: e.target.value})} value={formHandler.lastname}/>
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" required onChange={(e) => setFormHandler({...formHandler, email: e.target.value})} value={formHandler.email}/>
                <label htmlFor="email">Contraseña</label>
                <input type="password" required onChange={(e) => setFormHandler({...formHandler, password: e.target.value})} value={formHandler.password}/>
                <label htmlFor="email">Confirmar Contraseña</label>
                <input type="password" required onChange={(e) => setFormHandler({...formHandler, confirmPasword: e.target.value})} value={formHandler.confirmPasword}/>
                <input className="text-white bg-blue-500 w-4/12" type="submit"/>
                <p className='text-xs text-red-500'>*{authState.error}</p>
            </form>
            {authState.success && <Navigate to="/"/>}
        </div>
    </div>
  )
}

export default SignUp