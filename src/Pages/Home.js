import React from 'react'
import NavApp from '../Components/NavApp/NavApp'
import CaruselApp from '../Components/CaruselApp/CaruselApp'
import CardsApp from '../Components/CardsApp/CardsApp'
import TextApp from '../Components/TextApp/TextApp'
import FooterApp from '../Components/FooterApp/FooterApp'
function Home() {
  return (
    <div>
        <NavApp/>
        <CaruselApp/>
        <TextApp/>
        <CardsApp/>
        <FooterApp/>
    </div>
  )
}

export default Home