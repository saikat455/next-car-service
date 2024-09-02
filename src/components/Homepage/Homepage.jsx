import React from 'react';
import Banner from './Banner';
import About from './About';

const Homepage = () => {
    return (
        <div className='h-screen'>
           <Banner/>
           <About></About>
        </div>
    );
};

export default Homepage;