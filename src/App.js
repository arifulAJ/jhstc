
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavigationBar from './components/sharecomponents/NavigationBar';
import CarouselNotice from './pages/carousel/CarouselNotice';
import ImportantPersons from './pages/Persons/ImportantPersone';
import VideoGalary from './pages/galary/VideoGalary';
import Location from './pages/location/Location';
import Footer from './pages/footer/Footer';


function App() {
  return (
    <div className="">
   
  <NavigationBar />
  <CarouselNotice />
  <ImportantPersons />
  <VideoGalary />
  <Location />
  <Footer />
 
  
    </div>

    
  );
}

export default App;
