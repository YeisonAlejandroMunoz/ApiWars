import React, { useEffect, useState } from 'react'
import casco from '../Img/casco.jpg'
import './PerApi.css'

export const ComApi = () => {
    const [Personajes,setPersonajes] = useState ([]);
    useEffect(()=> {
        async function date () {
            const ale = await fetch ('https://swapi.dev/api/people/');
            const muz = await ale.json();
            setPersonajes(muz.results);
        }
        date();
    },[])
  return (
    <div>
        {Personajes.map(Personajes=>(
            <div className='cajax-container' key={setPersonajes}>
                <div>
                    <img style={{width: '230px', height: '200px'}} src={casco} />
                <p> Nombre: { Personajes.name }</p>
                <p> Altura: { Personajes.height}</p>
                <p> Masa: { Personajes.mass}</p>
                <p> Color de Pelo: { Personajes.hair_color}</p>
                <p> Color de Ojos: { Personajes.eye_color}</p>
                <p> Año de Nacimiento: { Personajes.birth_year}</p>
                <p> Genero: { Personajes.gender}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
