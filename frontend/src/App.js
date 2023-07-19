import logo from './logo.svg';
import Home from './Home'
import Navbar from './Header/Navbar';
import Banner from './Header/Banner'
import React from 'react';
import Stylist from './Stylist';
import About from './About';
import Contact from './Contact';


import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

function App() {



  return (
    <div className='main'>
      <nav className='navbar-container'>
        <Navbar />
      </nav>
      <div>
        <Home  />
      </div>

{/*       <div className="banner">
        <Banner />
      </div>
 */}



      <div>
        <Routes>
          <Route path ='/' element={<Home />}></Route>
          <Route path='/Stylist' element={<Stylist />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </div>


      
    </div>

  );
}

export default App;
