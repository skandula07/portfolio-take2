import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Navigation/Header';
import Illustration from './Pages/Illustration/Illustration';
import Ux from './Pages/UxCaseStudies/Ux';
import Launchpad from './Launchpad';
import Khoury from './Pages/Khoury/Khoury';

function App() {
  return (
    <BrowserRouter>

    <div className="mr-20 ml-20 mt-7">

      <Header />
      {/* border border-black */}

      <div className='p-5 '>

    <Routes>
      <Route path="/" element={<Launchpad />} />
      <Route path="/home" element={<Home />} />
      <Route path="/illustration" element={<Illustration />} />
      <Route path="/design" element={<h1>design</h1>} />
      <Route path="/ux" element={<Ux />} />
      <Route path="/khoury" element={<Khoury />}  />
      <Route path="/about" element={<h1>about</h1>}  />
    </Routes>
    </div>
    
    </div>

    </BrowserRouter>
  );
}

export default App;
