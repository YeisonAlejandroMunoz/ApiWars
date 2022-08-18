import logo from '../Img/LogoStar.png'
import './PerApi.css'
import React from "react";

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
        <section className='container'>
        <div className='cards'><img  className='portada' src={logo} />
                <h4 >Nombre: { Nombre }</h4>
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