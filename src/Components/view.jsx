import {useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import './View.css';


const View =()=>{
   
   const [Num,setNum]=useState(0);

return (<>
  <div  className="show">

   <h2> Counter </h2>

  
       <h3> {Num} </h3>


      <Increment setNum ={setNum}  Num={Num}  ></Increment>
      <Decrement setNum ={setNum}  Num={Num} ></Decrement>
    </div>


  

</>)


}


export default View