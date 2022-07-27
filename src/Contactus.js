import React, { useState } from "react"
import Navbar from '../src/Component/Navbar';
import Footer from '../src/Component/Footer';
import "./Contactus.css";
const Contactus = ({message,setmessage}) => {
    return ( 
    
        <section>
             <Navbar activePage={"Contactus"}/>
            <div className="list">
                {/* <h1>GET IN TOUCH</h1>               
            <i class="bi bi-telephone"></i> 
            <i class="bi bi-envelope"></i> */}
            <div className="contactContainer">
          <div class="contact-container d-flex  p-2 mt-4 gap-1">
    <div className="p-4" style={{textAlign:'center',width: '611px'}}>
            <div className="address-header">
                GET IN TOUCH 
            </div>
            <div className="contact-p">
                <p>
                    You can contact us with the following info
                </p>
            </div>

            <div className="Address-container p-2">
                <div className="address-header">
                <i class="bi bi-geo-alt"></i>
                </div>
                <div className="address-content">
                New layout state lowcost jos,plateau state  
                </div>
            </div>

    <div className="Address-container p-2">
        <div className="address-header">
        <i class="bi bi-telephone"></i> 
        </div>
        <div className="address-content">
             +2348120704258|+2329032572239
        </div>
    </div>
    <div className="Address-container p-2">
        <div className="address-header">
        <i class="bi bi-envelope"></i>
        </div>
        <div className="address-content">
        sylvianennyspa@gmail.com
        </div>
    </div>

        </div>
        <div>
            <form >
                <div className="Text-area-container">
                   
                    <textarea className="Text-area" value={message} onChange={(e)=>{
               setmessage(e.target.value)
           }}  name="" id="" cols="40" rows="40" placeholder="Type your message"></textarea>
                    <input className="button2" type="submit" value="SEND"></input>
                </div>
                
            </form>
        </div>

    </div>
      </div>
    
            </div>
    
        <Footer />
        </section>
     );
}
 
export default Contactus;