import React from 'react'
import { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import '../productDetails/product.css';


export default function ProductDetails() {
const parm = useParams();

useEffect(()=>{ getDataAboutProduct()},{})

const getDataAboutProduct = () => { 
    fetch(`https://fakestoreapi.com/products/${parm.id}`)
    .then(res=>res.json())
    .then(prodDetails=>setprodDetails(prodDetails))

 }
 const[prodDetails , setprodDetails] = useState([])


  return (
    <>
   
   <div className="row">
   <div className="col-md-4 p-3 mt-3">

     <img src={prodDetails.image} className="w-100" alt="dd"/>
   </div>
   <div className="col md-2"></div>
   <div className="col-md-6 d-flex align-items-center">
     <div>
        <h2>{prodDetails.title}</h2> 
        <h5 className='my-5'>{prodDetails.category}</h5>
        <p>{prodDetails.description}</p>
        <h3>{prodDetails.price} $</h3>

     </div>

   </div>


  </div>

  
    
    </>
  )
}
