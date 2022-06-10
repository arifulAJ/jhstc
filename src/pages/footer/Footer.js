import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer p-5'>
      <div class="container">
  <div class="row">
    <div class="col-sm">
      <Image 
      thumbnail
      rounded
      width="200px"
      height="200px"
      src='https://i.ibb.co/4RpGYHx/jhsct-logo.jpg'/>
      <h5 className='text-white py-1'>Jannat Ara Henry School And Collage</h5>
    </div>
    <div class="col-sm">
     <ul>
       <li> Address</li>
       <li> contact</li>
       <li> mobile</li>
       <li> Gmail</li>
     </ul>
    </div>
    <div class="col-sm">
       <ul>
         <li>Facebook</li>
         <li>Instagram</li>
       </ul>
    </div>
  </div>
</div>
<div>
  <p className='text-white py-2 text-center
  '> copyright @ Ariful islam And towhid islam</p>
</div>
    </div>
  );
}

export default Footer;
