import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="links">
      <nav className="navbar"> 
       <h1> Nen SPA</h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About us</Link>
          <Link to='/cando'>Services</Link>
          <Link to='/contact'>Contact us</Link>
      </nav>
      
       
      </div>
        
     );
}
 
export default Navbar ;