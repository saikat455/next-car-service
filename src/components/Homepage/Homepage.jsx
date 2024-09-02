import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';


const Homepage = () => {
    return (
        <div className='h-screen'>
           <Banner/>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Homepage;