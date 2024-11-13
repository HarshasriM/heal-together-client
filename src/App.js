import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUpForm from './components/Login/SignUpForm';
import Campaign from './Pages/Campaign/Campaign';
import CampaignsRaised from './Pages/CampaignsRaised/CampaignsRaised';
import SingleCampaign from './components/CampaignsRaised/SingleCampaign';
import Donation from './Pages/Donation/Donation';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/startcampaign' element={<Campaign />} />
        <Route path='/campaigns-raised' element={<CampaignsRaised />} />
        <Route path='/campaigns-raised/:id' element={<SingleCampaign />} />
        <Route path='/donate' element={<Donation />} />
      </Routes>
      <div>
        <Footer />
      </div>

    </Router>

  );
}

export default App;
