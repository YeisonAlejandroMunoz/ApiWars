import React from 'react'
import NavApp  from '../Components/NavApp/NavApp';
import FooterApp from '../Components/FooterApp/FooterApp';
import DetailsPersonApp from '../Components/DetailsPersonApp/DetailsPersonApp';


function DetallePerson() {
  return (
    <div>
    <NavApp/>
      <DetailsPersonApp/>
    <FooterApp/>
    </div>
  )
}

export default DetallePerson 