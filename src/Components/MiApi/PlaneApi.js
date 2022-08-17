import React, { useEffect, useState } from 'react'

export const PlaneApi = () => {
    const [Planetas,setPlanetas] = useState ([]);
    useEffect(()=> {
        async function plan () {
            const yei = await fetch ('https://swapi.dev/api/planets/');
            const uz = await yei.json();
            setPlanetas(uz.results);
        }
        plan();
    },[])
  return (
    <div>
        {Planetas.map(Planetas=>(
            <div key={setPlanetas}>
                <p>{ Planetas.name }</p>
                <p>{ Planetas.rotation_period}</p>
                <p>{ Planetas.orbital_period}</p>
                <p>{ Planetas.diameter}</p>
                <p>{ Planetas.climate}</p>
                <p>{ Planetas.gravity}</p>
                <p>{ Planetas.terrain}</p>
                <p>{ Planetas.population}</p>
            </div>
        ))}
    </div>
  )
}
