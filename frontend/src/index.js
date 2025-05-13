import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import PricingPage from './landing_page/pricing/pricingpage';
import Aboutpage from './landing_page/about/Aboutpage';
import ProductPage from './landing_page/product/ProductPage';
import SupportPage from './landing_page/support/Supportpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import {BrowserRouter , Routes , Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/signup' element = {<Signup/>}/>
    <Route path='/product' element = {<ProductPage/>}/>
    <Route path='/about' element = {<Aboutpage/>}/>
    <Route path='/pricing' element = {<PricingPage/>}/>
    <Route path='/support' element = {<SupportPage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

