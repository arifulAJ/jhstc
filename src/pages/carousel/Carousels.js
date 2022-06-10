import React from 'react'
import { Carousel, Image } from 'react-bootstrap'


export default function Carousels() {
  return (
    <div className=' mb-5'>
       <Carousel>
  <Carousel.Item interval={1000}>
  <Image
    thumbnail 
      className="d-block w-100"
      src="https://i.ibb.co/FBVhj0X/rsz-1henry1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      <p>Student and Teacher with honorable Chairman </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Image
    thumbnail 
      className="d-block w-100"
      src="
      https://i.ibb.co/N7D4dT3/width-600.jpg
      "
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      <p>Our Campus </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
    thumbnail 
      className="d-block w-100"
      src="https://i.ibb.co/xzTnJhw/image600-1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      <p>Cricket tournament final round team</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
