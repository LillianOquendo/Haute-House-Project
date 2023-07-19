import logo from './logo.svg';
import Home from './Home'
import Navbar from './Header/Navbar';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

function App() {



  return (
    <div className='main'>
      <nav className='navbar-container'>
        <Navbar />
      </nav>

      <div>
        <Routes>
          <Route path ='/' element= {<Home />}>
            
          </Route>
        </Routes>
      </div>


      
    </div>

  );
}

export default App;
