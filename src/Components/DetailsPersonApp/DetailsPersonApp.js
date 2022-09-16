import React from "react";
import Imagenes from "../Img/Imagenes";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";


function Eldetalle () {
  const {url} = useParams ();
  const [personajes,setPersonajes] = React.useState([])
  React.useEffect(() => {
    traerdatos()
  }, [])
  const traerdatos = async () =>{
    const data = await fetch(`https://swapi.dev/api/people/${url}`)
    const personaje = await data.json()
    setPersonajes(personaje)
  }
  // console.log(useParams())
  return (
    <div>
      <center>
        <h3 style={{ fontFamily: "Starjedi", color: "white" }}>Conoce más De {personajes.name}</h3>
      </center>
      <a href="javascript:history.back()">
        <img
          src={Imagenes.regreso}
          height="33"
          width="100"
          alt="Botón Regresar"
          style={{ backgroundColor: "white" }}
        />
      </a>
      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Imagenes.Speople} />
          <Card.Body>
            <Card.Title> <h4 style={{ color: "Black" }}>Nombre Del Personaje</h4> </Card.Title>
            <Card.Text style={{ color: "Black" }}>
              <p style={{ color: "Black" }}>La altura es de: {personajes.height}cm</p>
              <p style={{ color: "Black" }}>Su peso es de: {personajes.mass}</p>
              <p style={{ color: "Black" }}>El color de su piel es: {personajes.skin_color}</p>
              <p style={{ color: "Black" }}>El color de su pelo es: {personajes.hair_color}</p>
              <p style={{ color: "Black" }}>Su Genero es: {personajes.gender}</p>
              <h4 style={{color: 'Black'}}>Planeta de origen</h4>
              <p style={{ color: "Black" }}>La altura es de: {personajes.homeworld}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};


export default Eldetalle;
