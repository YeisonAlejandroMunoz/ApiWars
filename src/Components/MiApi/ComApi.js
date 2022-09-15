import logo from '../Img/LogoStar.png'
import './PerApi.css'
import React from "react";
import { Link } from 'react-router-dom';

export const ComApi = ({
    Nombre,
    Altura,
    Masa,
    Pelo,
    Ojos, 
    Nacimiento,
    Genero
  }) => {
  return (
    <div>
        <section className='m-5 text-center'>
        <div className='cards'><img  className='portada' src={logo} />
        <p>Ver más</p>
                <h4  className='mylink'> <Link to='/DetallePerson'></Link> Nombre: { Nombre }</h4>
                <p> Altura: { Altura}</p>
                <p> Masa: { Masa }</p>
                <p> Color de Pelo: { Pelo }</p>
                <p> Color de Ojos: { Ojos }</p>
                <p> Año de Nacimiento: { Nacimiento }</p>
                <p> Genero: { Genero }</p>
        </div>
        </section>
    </div>
  )
}

export default ComApi;