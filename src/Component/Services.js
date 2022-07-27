import { useNavigate } from "react-router-dom";
import "../Services.css";
const Services = ({heading,img}) => {
  let navigate = useNavigate();
    return ( 
     
        <div className="card">
        <h2>{heading}</h2>
        <div>
             <img style={{
            width:"378px",
            height:"210px",
          }} className="Melt" src={img}  alt=''></img> 
            </div> 
            <div className="novel">Select package <i class="bi bi-arrow-right"></i></div> 
        </div>
  
     );
}
 
export default Services;