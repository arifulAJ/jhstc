
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from './components/sharecomponents/NavigationBar';
import CarouselNotice from './pages/carousel/CarouselNotice';
import ImportantPersons from './pages/Persons/ImportantPersone';
import VideoGalary from './pages/galary/VideoGalary';
import Location from './pages/location/Location';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Cse from './pages/coures/cse/Cse';
import Bba from './pages/coures/bba/Bba';
import Hsc from './pages/coures/hsc/Hsc';


function App() {
  return (
    <div >
   
   <BrowserRouter>
   <NavigationBar />
        <Routes>
         <Route path='/' element={ <Home />} />
         <Route path='/home' element={ <Home />} />
         <Route path='/cse' element={ <Cse />} />
         <Route path='/bba' element={ <Bba />} />
         <Route path='/hsc' element={ <Hsc />} />
         
         
          
          
          
         
         </Routes>
         <Footer />
      </BrowserRouter>
 
 

 
  
    </div>

    
  );
}

export default App;
