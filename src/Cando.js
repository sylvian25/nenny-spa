import Navbar from '../src/Component/Navbar';
import Footer from '../src/Component/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Style from '../src/cando.module.css'
import card from './db.json'
import img from '../src/Asset/massag11.jpg'
import img1 from '../src/Asset/massage6.jpg'
import img2 from '../src/Asset/pedicure.jpg'
import img3 from '../src/Asset/massa.jpg'
import img4 from '../src/Asset/image1.png'
import img5 from '../src/Asset/image2.png'
import img6 from '../src/Asset/massage4.jpg'
import img7 from '../src/Asset/hairstyling.jpg'
import ServiceCard from './ServiceCard';

const Cando = ({}) => {
    const [data,setdata] = useState(card)  
    return ( 
        
        <div className="container"> 
         <Navbar activePage={"Cando"}/>
         
         <h1>OUR SERVICES</h1>
         <section className={Style.cardcontainer}>
         <ServiceCard name={card[0].name} img={img} message={card[0].Message}/>
           <ServiceCard name={card[1].name} img={img1} message={card[1].Message}/>
           <ServiceCard name={card[2].name} img={img2} message={card[2].Message}/>
           <ServiceCard name={card[3].name} img={img3} message={card[3].Message}/>
           <ServiceCard name={card[4].name} img={img4} message={card[4].Message}/>
           <ServiceCard name={card[5].name} img={img5} message={card[5].Message}/>
           <ServiceCard name={card[6].name} img={img6} message={card[6].Message}/>
           <ServiceCard name={card[7].name} img={img7} message={card[7].Message}/>

         </section>
         <Footer />
</div>
        
    )
    
}
 
export default Cando;