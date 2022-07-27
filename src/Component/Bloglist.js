import { useNavigate } from "react-router-dom";
import "../Bloglist.css"
const Bloglist = () => {
  let navigate = useNavigate();
    
    return ( 
      <sectio className="section-4">  
        <div  className="container2">
         <h2> About us</h2>
          <p>Here at Nen spa & saloon , is a unique channel of beauty and serenity in the heart of jos city, we dare to care...we dare to share,our passion is renewing your to make it come with glory
             we are passionate about creating a beautiful enviroment for our client and professional staff guest at Nen spa & saloon enjoy warm and experience therapy, we will takecare of you from the momement you arrive.This is your invitation to relax,recharge and escape the 
             outside world. We make you have unforgottable stay at our spa.Amenities are designed to soothe and inspired,nourish body ,soul and mind,
             in the spa ,a luxurious retreat to relax,reflect and immerse in personalized treatment and anticipatory services .Take the experience home -all spa 
             product are available for purchases.we are very meticulos in hygiene and strive to see that our clients are comfortable.  </p> 
            <button onClick={()=>{
               navigate("./about",{ replace: true });
             }}>Read more  </button>
             </div>
             {/* <div className="fan">
          <img style={{
            width:"100%",
            height:"80%",
            justifyItems:"center",
          }} className="favour" src={favour}  alt=''></img>
        </div> */}
      </sectio>  
        
        
     );
}
 
export default Bloglist;