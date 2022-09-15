import React from "react";
import Imagenes from "../Img/Imagenes";
import Card from "react-bootstrap/Card";

export const DetailsPersonApp = ({
  Nombre,
  Altura,
  Masa,
  Pelo,
  Ojos,
  Nacimiento,
  Genero,
}) => {
  return (
    <div>
      <center>
        <h3 style={{ fontFamily: "Starjedi", color: "white" }}>
          Conoce más De Tu Personaje
        </h3>
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
            <Card.Title>Nombre Del Personaje</Card.Title>
            <Card.Text style={{ color: "Black" }}>
              <p style={{ color: "Black" }}> Altura: {Altura}</p>
              <p style={{ color: "Black" }}> Masa: {Masa}</p>
              <p style={{ color: "Black" }}> Color de Pelo: {Pelo}</p>
              <p style={{ color: "Black" }}> Color de Ojos: {Ojos}</p>
              <p style={{ color: "Black" }}> Año de Nacimiento: {Nacimiento}</p>
              <p style={{ color: "Black" }}> Genero: {Genero}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

export default DetailsPersonApp;
