import React from 'react'
import NavApp from '../Components/NavApp/NavApp'
import FooterApp from '../Components/FooterApp/FooterApp'
import { UsePerson } from '../Hooks/UsePerson'
import {ComApi} from '../Components/MiApi/ComApi'
function Personajes() {
  return (
    <div>
      <NavApp/>
        <ComApi/>
      <FooterApp/>
    </div>
  )
}

export default Personajes