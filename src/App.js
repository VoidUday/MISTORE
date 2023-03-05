import './App.css';
import PreNav from './components/preNavBar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from './data/data.json'
import Offers from './components/Offers'
import Heading from './components/Heading.js'
import StarProduct from './components/StartProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'

function App() {
  return (
  <>
  <Router>
    <PreNav />
    <Navbar />
    <Slider  start={data.banner.start}/>
    <Offers offer={data.offer}  />
    <Heading text="STAR PRODUCT"/>
    <StarProduct StartProduct={data.starProduct} />
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu />

  </Router>  
  </>
  );
}
export default App;
