import React from 'react';
import Navbar from '../src/Component/Navbar';
import Home from '../src/Component/Home';
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import matchers from '@testing-library/jest-dom/matchers';
import './App.css';
import Footer from '../src/Component/Footer';
import Bloglist from '../src/Component/Bloglist';
import Services from '../src/Component/Services';
import Offering from '../src/Component/Offering';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react'
import Homepage from './Homepage';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Cando from './Cando';
// import Our from './Our.json';
function App() {
   
  const[message,setmessage] = useState('')
  return (
    // <Router>
    // <div className="App">
    //  <Navbar/>
    //   <div className='content'>
    //     <Switch>
    //       <Route path='/'>

    //       </Route>
    //     </Switch>
    //     <Home/>
    //     <Aboutuspage/>
    //     <Bloglist/>
    //     <Services/>
    //     <Servicess></Servicess>
    //     <Footer/>
    //   </div>
    // </div>
    // </Router>
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutus />} />
      <Route path="/cando" element={<Cando />} />
      <Route path="/contact" element={<Contactus  message={message} setmessage={setmessage}/>} />
        
    </Routes>
    </>
  );
}

export default App;
