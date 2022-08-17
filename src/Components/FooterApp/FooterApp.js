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
            <h2>Siguenos</h2>
            <div className='redes'>
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