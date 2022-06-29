import React from 'react';
import imgnot404 from '../../asstes/imgs/istockphoto-1299140151-612x612.jpg';
import { NavLink } from 'react-router-dom';
export default function NotFound() {
  return (
    <>
     <img src={imgnot404} alt="notfound" className='d-block mx-auto'/>
    
    <NavLink className='btn  btn-info  d-block' to='/home'>back to home</NavLink>
    
    </>
  )
}
