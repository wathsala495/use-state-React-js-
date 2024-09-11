import React from 'react';
import myData from './../Data/myData'
import Main from  './../Components/Main'

export default function UserData() {
  return (
    <div>
      <h4>Data import from another file</h4>

      {myData.map((element)=>{
      return(
        // <p>{element.name}</p>
        <Main  name={element.name} city={element.city} position={element.position}/>
      )
     })}
    </div>
  )
}
