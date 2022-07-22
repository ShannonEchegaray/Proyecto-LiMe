import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./ItemDetailContainer.css"
import ItemCount from '../ItemCount';

const ItemDetailContainer = () => {
  return (
    <div>
      <div className="fondoMain">
        <div className="cardItem">
          <div className='containerItem'>
            
          </div>
          <div className='containerDetailItem'>
            <div className='containerDescriptionItem'>
              <p className='newParagraph'>Nuevo | n comprados</p>
              <p className='titleParagraph'>Item tal, descripcion otra tal</p>
              <div className='titleParagraph' style={{display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <StarIcon sx={{ fontSize: 18 }} color="primary"/>
                <span style={{fontSize:"18px", verticalAlign: "middle"}}>(n)</span>
              </div>
              <div>
                <p className='priceParagraph'>$ X.XXX</p>
                <p>en 12 x $XXX</p>
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
                  <ItemCount stock={20} initial={1}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer