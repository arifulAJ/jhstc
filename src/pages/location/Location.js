import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Location.css'
export default function Location() {
  return (

    <div className=' container-fluid mx-auto mapLocation p-lg-5'  >
  <Row>
    <Col md={6}>
     <div className='messageArea pb-3'>
     <h1>Message area</h1>
       <form >
         <label for="name">Enter Name :</label> <br />
        <input  type="text" name="name" id="name" /> <br />
         <label for="email">Enter Email :</label> <br />
        <input className='my-1' type="text" name="email" id="email" /> <br />
        <textarea className='my-1' name="message" rows="5" cols="32"> text area </textarea> <br />
        <input type="submit"/>
       </form>
     </div>
       </Col>
    <Col md={6}>
        <div className='mapStyle'>
            <h1> Find Campus Location Using Google Map </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232400.95147662458!2d89.683847!3d24.476278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x985e46ae3bf31c6e!2sJannat%20Ara%20Henry%20Science%20%26%20Technology%20College!5e0!3m2!1sbn!2sbd!4v1654162581988!5m2!1sbn!2sbd" 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      </div></Col>
  </Row>
    </div>
  )
}
