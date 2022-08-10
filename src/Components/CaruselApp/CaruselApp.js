import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Imagenes from '../Img/Imagenes';


function CaruselApp() {
  return (
    <div>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.SL1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.SL2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagenes.SL3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CaruselApp