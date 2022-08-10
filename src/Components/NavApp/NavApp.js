import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Imagenes from '../Img/Imagenes';
import './SNavApp.css'
import { Link } from 'react-router-dom';

export const NavApp = () => {
  return (
    <div>
    <Navbar className='Barra' variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Imagenes.milogo}
              width="100"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Nav>
                <Nav.Link >  Home </Nav.Link>
                <Nav.Link>  Personajes </Nav.Link>
                <Nav.Link>  Planteas </Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavApp



