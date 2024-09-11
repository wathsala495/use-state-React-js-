import logo from './logo.svg';
import './App.css';
import Main from './Components/Main'
import UserData from './Components/UserData';
import { Fragment, useState } from 'react';
//import myData for method 2
import myData from './Data/myData'



function App() {
  const myData=[
    { id:1234,
      name:'amila',
      city:'tangalle',
      position :'web Developer'
    },
    {
      id:1235,
      name:'kumara',
      city:'galle',
      position :'app Developer'
    },
    {
      id:1236,
      name:'nimal ',
      city:'colombo',
      position :'react Developer'
    },
    {
      id:1237,
      name:'upul ',
      city:'colombo',
      position :'java Developer'
    },
  ]


  // let myVar="Amal"
 //use state
  // const [myVar,setmyVar]=useState('Amal');
  // const clickHandle=()=>{
  //   setmyVar("upul")
    
  // }
  // console.log(myVar)
  // const [myVar,setmyVar]=useState(
  //   {
  //     name:'amila',
  //     city:'tangalle',
  //     position :'web Developer'
  //   });
  // const clickHandle=()=>{
  //   setmyVar({
  //     ...myVar,
  //     name:"pavan",
  //     name:"nimal"
  //   })
    
  // }
  // console.log(myVar)
  //  dynamic components

  const [myDataState,setmyDataState]=useState(myData);
   

    
   const clickHandle=()=>{
    setmyDataState([...myDataState,
      {
      id:1238,
      name:'kumari ',
      city:'matara',
      position :'database Developer'
      } 
    ]
    )
    console.log(myDataState)
    }

    let [inputVal,setinputVal]=useState(0)
   console.log(inputVal)

   const changeCount=()=>{
    setinputVal(inputVal+1)
   }
    
  return (
    <>
   
 
     <div className='main'>
      {/* <h1>{myVar}</h1> */}
      {/* <h1>{myVar.name}</h1> */}
     <h4>Object Distructuring with index</h4>
    
     <div className='mainBlock_container'>
     {myDataState.map(({name,city,position,id},index)=>{
      return(
        // <p>{element.name}</p>
        <Main key={id + index} name={name} city={city} position={position}/>
      )
     })}
     </div>
     {/* inline css */}
     <button style={{

  fontSize:"12px",
  border:"1px solid red",
  padding:"7px 12px"

     }} onClick={()=>{setinputVal(inputVal++)}}>Click Me</button>
     <br></br>
     <button style={{

  fontSize:"12px",
  border:"1px solid red",
  padding:"7px 12px"

     }} onClick={changeCount}>Count</button>

<br></br>
     <br></br>
     <input type='text' style={{
      border:"1px solid red",
      fontSize:'14px',
      padding:'7px'
     }}
     onChange={(e)=>{
       e.preventDefault()
      setinputVal(e.target.value)}}
     
     ></input>
     <p>{inputVal}</p>
     </div>
     
   
    </>
  );
}

export default App;
