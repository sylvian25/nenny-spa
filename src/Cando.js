import Navbar from '../src/Component/Navbar';
import Footer from '../src/Component/Footer';
import { useState } from 'react';
import axios from 'axios';

const Cando = ({}) => {
    const [data,setdata] = useState([])
    axios.get('http://localhost:3000/posts').then((res)=>{
        setdata(res.data)
    })
    console.log(data)
    return ( 
        
        <div className="container"> 
         <Navbar activePage={"Cando"}/>
         
         <h1>OUR SERVICES</h1>
         <section>
            {
                data.map((a)=>{
                    return(
                        <>
                        <div>{a.name}</div>
                        <img src={a.img} />
                        </>
                    )
                })
            }

         </section>
         <Footer />
</div>
        
    )
    
}
 
export default Cando;