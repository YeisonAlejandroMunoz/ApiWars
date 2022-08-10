import React from 'react'
import Imagenes from '../Img/Imagenes';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function CardsApp() {
  return (
    <div>
<CardGroup>
      <Card>
        <Card.Img variant="top" style={{  height: '680px'}} src={Imagenes.c1} />
      </Card>
      <Card>
        <Card.Img variant="top" style={{  height: '680px'}} src={Imagenes.c2} />
      </Card>
      <Card>
        <Card.Img variant="top" style={{  height: '680px'}} src={Imagenes.c3} />
      </Card>
    </CardGroup>
    </div>
  )
}

export default CardsApp