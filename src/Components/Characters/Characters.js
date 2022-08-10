import React, { useEffect } from 'react'
import { UsePerson } from '../Characters/Characters'

export const Characters = () => {
  const {getAllPeople} = UsePerson();

  useEffect(() => {
    getAllPeople();
    console.log(getAllPeople());
  },[]);

  return(
    <div>
      <p>{getAllPeople}</p>
    </div>
  )
}