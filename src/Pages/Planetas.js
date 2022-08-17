import React from 'react'
import NavApp from '../Components/NavApp/NavApp'
import FooterApp from '../Components/FooterApp/FooterApp'
import { PlaneApi } from '../Components/MiApi/PlaneApi'

function Planetas() {
  return (
    <div>
      <NavApp/>
      <PlaneApi/>
      <FooterApp/>
    </div>
  )
}

export default Planetas