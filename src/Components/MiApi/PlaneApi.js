import React from 'react'
import imgplanets from '../Img/star-wars.jpg'
import './PerApi.css'

export const PlaneApi = ({
    name,
    rotacaion,
    orbita,
    diametro,
    clima,
    gravedad,
    territorio,
    poblacion
   }) => {
  return (
    <div>
        <section className='container'>
        <div className='cards'><img  className='portada' src={imgplanets} />
                <h4> Nombre: { name }</h4>
                <p> Rotación: { rotacaion }</p>
                <p> Orbita: { orbita }</p>
                <p> Diametro: { diametro }</p>
                <p> Clima:{ clima }</p>
                <p> Gravedad: { gravedad }</p>
                <p> Territorio: { territorio }</p>
                <p> Población: { poblacion }</p>
        </div>
        </section>
    </div>
  )
}
