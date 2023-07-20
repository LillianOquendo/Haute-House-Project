import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Home from './Home'
import Navbar from './Header/Navbar';
import Banner from './Header/Banner'
import Stylists from './Stylists';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

function App() {

  const [stylists, setStylists] = useState([])

  useEffect(() => {
    fetch("/stylists")
    .then(resp => resp.json())
    .then(data => setStylists(data))
  },[])

console.log(stylists)

  return (
    <div className='main'>
      <nav className='navbar-container'>
        <Navbar />
      </nav>

      <div>
        <Routes>
          <Route path ='/' element={<Home />}></Route>
          <Route path='/Stylists' element={<Stylists stylists={stylists} />}></Route>
          {/* <Route path='/Stylists/:id' element={<Stylist />}></Route> */}
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </div>


      
    </div>

  );
}

export default App;
