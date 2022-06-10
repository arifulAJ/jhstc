import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './videoGalary.css'
import Gallery from './Gallery'
import Event from './Event'
export default function VideoGalary() {
  return (
    <div className='mt-5 p-3'>
        <Container >
  <Row className='gy-5' >
    <Col   sm={8}>
      <Gallery />
      
    </Col>
    <Col sm={4}>
    <Event />
    </Col>
  </Row>
  </Container>
    </div>
  )
}
