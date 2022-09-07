import React from 'react';
import Imagenes from '../Img/Imagenes';
import Card from 'react-bootstrap/Card';

function DetailsPersonApp() {
    return (
      <div>
  
        <center><h3 style={{fontFamily: 'Starjedi', color: 'white'}}>Conoce más De Tu Personaje</h3></center>
            <a href="javascript:history.back()">
                <img 
                src={Imagenes.regreso}
                height="33"
                width="100"
                alt="Botón Regresar"
                style={{backgroundColor: 'white'}}/>
            </a>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagenes.Speople} />
        <Card.Body>
            <Card.Title>asda</Card.Title>
                <Card.Text style={{ color: 'Black' }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
      </Card.Body>
    </Card>
      </div>
    );
  }
  
export default DetailsPersonApp