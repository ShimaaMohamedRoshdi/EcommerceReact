import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
 import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestCollection from './components/LatestCollection';
import BestSeller from './components/BestSeller';
import ShopContextProvider from './context/ShopContext';
import OurPolicy from './components/OurPolicy';
import NewsletterBox from './components/NewsletterBox';
import Footer from './components/Footer';
import Collection from './pages/Collection';
import SearchBar from './components/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ShopContextProvider>
     
     
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar/>
     
      {/* <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    */}
   
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
      
        </Routes> 
        <Footer/> 
      
        </div>
    </ShopContextProvider>
  );
};

export default App;


