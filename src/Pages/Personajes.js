import React from 'react'
import NavApp from '../Components/NavApp/NavApp'
import FooterApp from '../Components/FooterApp/FooterApp'
import { UsePerson } from '../Hooks/UsePerson'

function Personajes() {
  return (
    <div>
      <NavApp/>
        Personajes
      <FooterApp/>
    </div>
  )
}

export default Personajes