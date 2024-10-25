
import React from 'react';
import LatestCollection from '../components/LatestCollection';
import Hero from '../components/Hero';
import ShopContextProvider  from '../context/ShopContext'; 

import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import Collection from './Collection';




const Home = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     
      <ShopContextProvider>
         <Hero />
        <LatestCollection />
        <BestSeller/>
        <OurPolicy/>
        <NewsletterBox/> 
      
     
      
    
      </ShopContextProvider>
    
      
    </div>
  );
};

export default Home;

