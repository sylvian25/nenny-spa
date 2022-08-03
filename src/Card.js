import Services from "./Component/Services";
import { useNavigate } from "react-router-dom";
import melt from "../src/Asset/image1.png";
import delt from "../src/Asset/image2.png";
import lelt from "../src/Asset/massa.jpg";
import '../src/Services.css'


const Card = () => {
    let navigate = useNavigate();
    return ( 
        <>
        <div className="cardcontainer">
        <Services heading="Deep  Tissue massage " img={melt}/>
        <Services heading="Facials massage with scrubs "img={delt}/>
        <Services heading="Body Treatment with scrubs "img={lelt}/>
        
        </div>
        {/* <button className="btn-card">More Option</button> */}
        <button  className="btn-card" onClick={()=>{
               navigate("./cando",{ replace: true });
             }}>More services  </button>
        </>
     );
}
 
export default Card;