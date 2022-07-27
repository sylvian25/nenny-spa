 import { useNavigate } from "react-router-dom";
 import met from "../Asset/massage1.jpg";
 import get from "../Asset/massage2.jpg";
const Aboutuspage = () => {
  let navigate = useNavigate();
    return ( 
      <section className="section-1">
        <div className="dan">
          <img style={{
            width:"80%",
            height:"60%"
          }} className="get" src={get}  alt=''></img>
        </div>
        <div className="container">
         <h2>Get to know us</h2>
          <p>Here at Nen spa & saloon , is a unique channel of beauty and serenity in the heart of jos city, we dare to care...we dare to share,our passion is renewing your to make it come with glory
           we are passionate about creating a beautiful enviroment for our client and professional staff .through our speacialty ,we offer to finest services and products with sophisticated result 
             we are commited in building up relationships and prooviding and individual experience where the whole person feels nutured an cared for
             always remember is at your finger tips.</p> 
             <button onClick={()=>{
               navigate("./about",{ replace: true });
             }}>Read more  </button></div>
      </section>
    
     );
}
 
export default Aboutuspage ;