import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

 const MyNavbar = ()=> {
  return (
     <>
          <Navbar bg="dark" variant="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand to="home">protoflio</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className='styl'  to="/home">Home</NavLink>
            <NavLink className='styl'  to="/about">about</NavLink>
            {/* <NavLink className='styl'  to="/project">projects</NavLink> */}
            <NavLink className='styl'  to="/contact">Contact</NavLink>
            
            <li className="nav-item dropdown">
               <a className="styl  nav-link dropdown-toggle" to="/project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               projects
                </a>
                <ul className=" styl dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className=" styl dropdown-item" to="/prodocts">Products pro.</NavLink></li>
                    <li><NavLink className=" styl dropdown-item" to="/counter">counter pro.</NavLink></li>
                    <li><NavLink className=" styl dropdown-item" to="/todo">ToDo List pro.</NavLink></li>
                </ul>
           </li>

          </Nav>
        </Container>
          </Navbar>

    </>
  )
}
export default MyNavbar