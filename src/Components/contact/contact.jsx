import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from  '../../asstes/imgs/a1.jpg';
import img2 from  '../../asstes/imgs/a2.jpeg';
import img3 from  '../../asstes/imgs/a4.jpg';
 const Contact = ()=> {
  return (
    <>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src={img1}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    
    
    
    
    
    </>
  )
}


export default Contact