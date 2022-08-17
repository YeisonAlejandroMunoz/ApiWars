import React, { useEffect, useState } from 'react'

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
            <div key={setPersonajes}>
                <p>{ Personajes.name }</p>
                <p>{ Personajes.height}</p>
                <p>{ Personajes.mass}</p>
                <p>{ Personajes.hair_color}</p>
                <p>{ Personajes.eye_color}</p>
                <p>{ Personajes.birth_year}</p>
                <p>{ Personajes.gender}</p>
            </div>
        ))}
    </div>
  )
}
