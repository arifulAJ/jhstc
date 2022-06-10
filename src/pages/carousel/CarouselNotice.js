import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousels from './Carousels';
import './CarouselNotice.css'
import Notice from './Notice';


const CarouselNotice = () => {
    return (
     <div className='pt-1 backgroundImg'>
        <Container >
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
           <Carousels />
          </Col>
          <Col xs={6} md={4}>
           <Notice />
          </Col>
        </Row>
      
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        {/* <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem ducimus quod voluptatum perferendis fugit rem? Ullam exercitationem debitis at, vel asperiores expedita velit delectus iure nihil ipsa, animi iusto!
          </Col>
        </Row>
       */}
        {/* Columns are always 50% wide, on mobile and desktop */}
      
      </Container> 
      </div>
    );
}

export default CarouselNotice;
