
import {   Button, Container, Image, Nav, Navbar} from 'react-bootstrap';


import './Navigation.css'

export default function NavigationBar() {
 
  return (
    <>
    {/* logo and university name  */}
  <section className="d-flex logoBackground justify-content-md-around align-items-center p-1  ">
  
     <Image 
     bg="white"
     width="130px"
     className='logoUp'
     height="120px"
     src="https://i.ibb.co/4RpGYHx/jhsct-logo.jpg"
  rounded
     />
     <Image 
     bg="white"
     width="80px"
     thumbnail 
     className='naveImage'
     height="80px"
     src="https://i.ibb.co/4RpGYHx/jhsct-logo.jpg"
   roundedCircle
     />
     
    
        <p
        className=' text-white px-sm-4'
        >
           Jannat Ara Henry Science And Technology Collage
       </p>
         
 </section>
           
      
   {/* Navigation bar area  */}
   <section>
       <Navbar  className='navbarBg '  expand="md">
  <Container >
    <div>
      
    {/* <Image 
     bg="white"
     width="80px"
     thumbnail 
     className='naveImage'
     height="80px"
     src="https://i.ibb.co/4RpGYHx/jhsct-logo.jpg"
   roundedCircle
     /> */}
     <Button
     className='fs-4 '
      >
         Apply Online</Button>
    </div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0   "
        style={{ maxHeight: '300px' }}
        navbarScroll
      >
      
       <div className=' menuBar '> 
        <ul >
          <li className='p-2'> <a href='#home'> home</a></li>
          
          <li className='p-2 '> <a href='#home'> Courses</a>
          <div className='NavExpand'>
          <ul  >
            <li> <a href='#cse'> Department of CSE</a></li>
            <li> <a href='#bse'> Department of BBA</a></li>
            <li> <a href='#bse'> Higher Secondary Education  </a></li>
            
          </ul>
          </div>
          </li>
         
          <li className='p-2'> <a href='#home'> about</a></li>
          <li className='p-2 '> <a href='#home'> Notice</a>
          <div className='NavExpand'>
          <ul  >
            <li> <a href='#cse'> Exam Notice</a></li>
            <li> <a href='#bse'> General Notice</a></li>
            <li> <a href='#bse'> News and Event</a></li>
            <li> <a href='#bse'> Job Notice</a></li>
            <li> <a href='#bse'>Admission Notice</a></li>
          
          </ul>
          </div>
          </li>
          <li className='p-2 '> <a href='#home'> students</a>
          <div className='NavExpand'>
          <ul  >
            <li> <a href='#cse'> Exam Notice</a></li>
            <li> <a href='#bse'> General Notice</a></li>
            <li> <a href='#bse'> News and Event</a></li>
            <li> <a href='#bse'> Job Notice</a></li>
            <li> <a href='#bse'>Admission Notice</a></li>
          
          </ul>
          </div>
          </li>
          <li className='p-2 '> <a href='#home'> teachers</a>
          <div className='NavExpand'>
          <ul  >
            <li> <a href='#cse'> Exam Notice</a></li>
            <li> <a href='#bse'> General Notice</a></li>
            <li> <a href='#bse'> News and Event</a></li>
            <li> <a href='#bse'> Job Notice</a></li>
            <li> <a href='#bse'>Admission Notice</a></li>
          
          </ul>
          </div>
          </li>
        </ul>
       
        </div>
        </Nav>
       
     
    </Navbar.Collapse>
  </Container>
</Navbar>
</section>
    </>
  )
}
