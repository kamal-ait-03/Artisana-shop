import React from 'react'
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import BesteSeller from '../components/BesteSeller';
import OurPolicy from '../components/OurPolicy';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <LatestCollections />
        <BesteSeller/>
        <OurPolicy />
      </div>
      <Newsletter/>
    </div>
  );
}

export default Home 
