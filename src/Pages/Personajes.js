import React from 'react'
import { useEffect } from 'react'
import NavApp from '../Components/NavApp/NavApp'
import FooterApp from '../Components/FooterApp/FooterApp'
import { UsePerson } from '../Hooks/UsePerson'
import { ComApi } from '../Components/MiApi/ComApi'

const Personajes = () => {
  const { getAllPerson, dataPeople, Contador, disminuir, aumentar } =
    UsePerson();
  useEffect(() => {
    getAllPerson(Contador);

    // console.log(dataPeople);
  }, [dataPeople]);
  return (
    <div>
        <NavApp/>
      <div>
        <div className="apartado">Personajes</div>
        {dataPeople.map((personajes) => (
        <ComApi
            key={personajes.name}
            Nombre={personajes.name}
            Altura={personajes.height}
            Masa={personajes.mass}
            Pelo={personajes.hair_color}
            Ojos={personajes.eye_color}
            Nacimiento={personajes.birth_year}
            Genero={personajes.gender}
          />
        ))}
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <button className="ant" onClick={disminuir}>Anterior</button>
        <b className='number'>{Contador}</b>
        <button className="sig" onClick={aumentar}>Siguiente</button>
      </div><br/>
      <FooterApp/>
    </div>
  );
};

export default Personajes;