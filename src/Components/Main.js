import React, { Fragment } from 'react';
import img from './../images/img1.jpg'
import './../../src/App.css'

//obj
const name1="nimal";
const position1="developer"

const myObj={
    name:`${name1}`,
    position:`${position1}`
}
export default function Main(props) {

return(
<div>
{/* <ul>
  <li>{props.name}</li>
  <li>{props.city}</li>
  <li>{props.position}</li>
  
</ul> */}

<img src={img} alt="image"/>
<div>

  <h3>{props.name}</h3>
  <div className='main_p'>
  <p><span>{props.city}</span>
  <span>{props.position}</span></p>
  </div>
</div>
</div>
)
}
