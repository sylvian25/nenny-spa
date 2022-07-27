import Navbar from '../src/Component/Navbar';
import Home from '../src/Component/Home';
import './App.css';
import Footer from '../src/Component/Footer';
import Bloglist from '../src/Component/Bloglist';
import Services from '../src/Component/Services';
import Offering from '../src/Component/Offering';
import Card from './Card';
const Homepage = () => {
    return (  
        <div className='long'>
         <Navbar/>
         <Home/>
         <Bloglist/>
         <Card/>
         <Offering/>
         <Footer/>
        </div>
    );
}
 
export default Homepage ;