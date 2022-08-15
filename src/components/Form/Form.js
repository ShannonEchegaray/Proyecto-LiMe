import React, {useState, useEffect, useContext} from 'react'
import { userContext } from '../UserContext/UserContext'
import {cartContext} from '../Containers/Cart/context/CartContext'
import {useParams} from "react-router-dom"
import "./Compras.css"
import { addPurchase } from '../../api/firebase'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Form = () => {

    const {getData, authId} = useContext(userContext)
    const {item, items, fPrice} = useContext(cartContext)

    const [formHandler, setFormHandler] = useState({firstname: "", lastname: "", email: ""})
    const [compra, setCompra] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        authId && getData().then(datos => setFormHandler({firstname: datos.nombre, lastname: datos.apellido, email: datos.email}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const submitHandler = (e) => {
        e.preventDefault();
        addPurchase({datosComprador: formHandler,
                    items: id ? item : items,
                    total: fPrice}).then(data => setCompra(data))
    }

  return (
    <div className='fondoMain'>
        <div className={`formContainer ${compra ? "flex flex-col justify-around items-center" : null}`}>
            {compra 
            ? 
            <>
                <p className='text-lg font-bold'>Has realizado la compra con exito, su id de compra es: {compra}</p>
                <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }}/>
            </>
            : 
            <form className="flex flex-col items-center form"  onSubmit={submitHandler}>
                <label htmlFor='firstname'>Nombre</label>
                <input type="text" required onChange={(e) => setFormHandler({...formHandler, firstname: e.target.value})} value={formHandler.firstname}/>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" required onChange={(e) => setFormHandler({...formHandler, lastname: e.target.value})} value={formHandler.lastname}/>
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" required onChange={(e) => setFormHandler({...formHandler, email: e.target.value})} value={formHandler.email}/>
                <input disabled={compra ? true : false} className="text-white bg-blue-500 w-4/12" type="submit"/>
            </form>
            }
        </div>
    </div>
  )
}

export default Form