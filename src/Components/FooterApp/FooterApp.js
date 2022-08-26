import React from 'react'
import Imagenes from '../Img/Imagenes';
import './Footer.css'

function FooterApp() {
  return (
    <div className='footer'>
      <div className='grupo1'>
        <div className='box'>
          <figure>
            <img src={Imagenes.milogo}/>
          </figure>
        </div>
        <div className='box'>
            <h2>Guerras De las Galaxias</h2>
            <p>Star Wars, conocida también en español como La guerra de las galaxias es una franquicia y universo compartido compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012.</p>
        </div>
        <div className='box'>
            <h2>Contacto</h2>
            <div className='redes'>
              <p style={{fontWeight: 'bold'}}>CORREOS</p>
              <p>yamunoz833@misena.edu.co</p>
              <p>ykz73751@gmail.com</p>
              <p style={{fontWeight: 'bold'}}>TELEFONOS</p>
              <p>3172240074</p>
              <p>2762546</p>
            </div>
        </div>
      </div>
      <div className='grupo2'>
          <small>© Copyright Star Wars 2022-Todos los derechos reservados</small>
        </div>
    </div>
  )
}

export default FooterApp