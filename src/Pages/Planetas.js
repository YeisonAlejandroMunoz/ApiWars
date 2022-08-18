import { useEffect } from 'react'
import React from 'react'
import NavApp from '../Components/NavApp/NavApp'
import FooterApp from '../Components/FooterApp/FooterApp'
import {UsePlanets} from '../Hooks/UsePlanets'
import { PlaneApi } from '../Components/MiApi/PlaneApi'

const Planetas = () => {
  const { getAllPlanets, dataPlanets, Contador, disminuir, aumentar } =
    UsePlanets();
  useEffect(() => {
    getAllPlanets(Contador);

    // console.log(dataPlanets);
  }, [dataPlanets]);

  return (
    <div>
        <NavApp/>
      <div>
       <div className='apartado'>Planetas</div>
        {dataPlanets.map((planetas) => (
        <PlaneApi
        key={planetas.name}
        name={planetas.name}
        rotacaion={planetas.rotation_period}
        orbita={planetas.orbital_period}
        diametro={planetas.diameter}
        clima={planetas.climate}
        gravedad={planetas.gravity}
        territorio={planetas.terrain}
        poblacion={planetas.population}
          />
        ))}
      </div>
      <div className="container d-flex  justify-content-center align-items-center">
        <button className="ant" onClick={disminuir}>Anterior</button>
        <b className='number'>{Contador}</b>
        <button className="sig" onClick={aumentar}>Siguiente</button>
      </div>
      <FooterApp/>
    </div>
  );
};

export default Planetas;