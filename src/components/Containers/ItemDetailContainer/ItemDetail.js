import React, {useState} from 'react'
import ItemCount from './ItemCount';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./ItemDetail.css"


const ItemDetail = ({item}) => {

  const [producto, setProducto] = useState({item})


    const addProduct = (counter) => {
        counter > 20 ? setProducto(counter) : console.log("no se banca el stock")
      }

  return (
    <div className='containerDetailItem'>
            <div className='containerDescriptionItem sticky top-2.5'>
              <p className='newParagraph'>Nuevo | n comprados</p>
              <p className='titleParagraph'>{item.title}</p>
              <div className='titleParagraph' style={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <span style={{fontSize:"18px", verticalAlign: "middle"}}>(n)</span>
              </div>
              <div>
                <p className='priceParagraph'>$ {item.price}</p>
                <p>en 12 x ${item.price / 12}</p>
              </div>
              <p className='payMethods'>ver los medios de pago</p>

              <div className='containerEnvio'>
                <div className='ico-envio'>
                  <LocalShippingIcon sx={{ color: "#00a650" }}/>
                </div>
                <div style={{paddingBottom: "15px"}}>
                  <p style={{color: "#00a650"}}>Envío gratis a todo el pais</p>
                  <p className='envioParagraph'>conocé los tiempos y las formas de entrega</p>
                  <p className='link'>calcular cuándo llega</p>
                </div>
                <div>
                  Color: <span style={{fontWeight: "500"}}>Azul</span>
                </div>
                <div style={{paddingTop: "20px"}}>
                  <ItemCount addProducto={addProduct} stock={producto.qty} initial={1}/>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ItemDetail