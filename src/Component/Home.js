import { Link } from "react-router-dom";
import Done from "../Asset/greenspa.png";
import "../Home.css"
const Home = () => {
    
   
     return ( 
        <div className="home">
            <div>
              <div className="home-left">
              <h2>Welcome</h2>
              <h2>To Nen spa & saloon</h2>
              <p>Beauty is at your fingertip  
                <button>Become a member</button>  <Link className="contactus" to="/contact">Contact us..</Link></p>
              </div>
            </div>
             <div>
             <img style={{
            width:"100%",
            height:"80%",
          }} className="Done" src={Done}  alt=''></img> 
            </div> 
              
        </div>
         
     );
}
 
export default Home;
