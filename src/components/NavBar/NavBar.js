import React, {useContext} from 'react'
import { cartContext } from '../Containers/Cart/context/CartContext';
import "./NavBar.css"
import {BiCart, BiSearch} from "react-icons/bi"
import { Link } from 'react-router-dom';
import { GoLocation } from "react-icons/go";

const NavBar = () => {

    const {nop} = useContext(cartContext)

    const categories = [
        {categoria: "electronics"},
        {categoria: "women's clothing"},
        {categoria: "jewelery"},
        {categoria: "men's clothing"}
    ]

  return (
    <header id="header">
        <div>
            <Link to="/">
                <img src="https://i.imgur.com/ohCDrgI.png" alt="" />
            </Link>
            <form action="" className='formularioBuscador'>
                <input type="text" className="inputBuscador" placeholder='Buscar productos, marcas y mas...'/>
                <button className='botonBuscador'>
                    <div className="iconoBuscador"><BiSearch size={"16px"}/></div>
                </button>
            </form>
            <h3 style={{fontSize: "0.95em"}}>Enviós gratis en 24 hs a partir de $4000</h3>
            <div className="carroContenedor relative">
                <p className='numeroRe'>{nop ? nop : null}</p>
                <Link to="/cart">
                    <BiCart size={"20px"}/>
                </Link>
            </div>
        </div>
        <div className='headerDos'>
            <div className="ubicacion">
                <GoLocation />
                <h3>Ubicacion</h3>
            </div>
            <nav className='navegacion'>
                <ul className='listah'>
                    <li>Ofertas</li>
                    <li className='categorias'>Categorias
                        <ul className='bg-black rounded overflow-hidden m-0 p-0'>
                        {categories.map((el, index) => <li key={index} className='bg-gray-800 px-2 py-1.5 hover:bg-gray-500'><Link className='text-white' to={`/${el.categoria}`}>{el.categoria}</Link></li>)}
                        </ul>
                    </li>
                </ul>

                <ul className='listah'>
                    <li><Link to="/signUp">Creá tu cuenta</Link></li>
                    <li><Link to="/signIn">Ingresá</Link></li>
                    <li><Link to="/purchases">Mis Compras</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavBar;