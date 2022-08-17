import Card from 'react-bootstrap/Card';
import React from 'react'
import './StyleCards.css';


function Cards({foto,titulo,infor}) {
  return (
    <div> 
      <Card style={{ width: '18rem', backgroundColor: 'black'}}>
      <Card.Img variant="top" src={foto}/>
      <Card.Body>
        <Card.Title style={{color: 'white',textAlign: 'center' }}>{titulo}</Card.Title>
        <Card.Text style={{ color: 'white', textAlign: 'center', fontSize: '18px',}}>{infor}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards