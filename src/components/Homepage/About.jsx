import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="container mx-auto text-slate-800">
    <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <Image width={1000} height={1000} alt='Person image' src={'/assets/images/about_us/person.jpg'} className="w-3/4 rounded-lg shadow-2xl" />
            <Image width={1000} height={1000} alt='Part image' src={'/assets/images/about_us/parts.jpg'} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className='lg:w-1/2 space-y-3 p-4'>
            <h3 className='text-3xl text-orange-500 font-bold mr-24 mt-10'>About Us</h3>
            <h1 className="text-xl font-bold">Committed to Committed to caring for patients with compassion and expertise</h1>
            <p className="">We offer dedicated, compassionate care with years of experience. Our team ensures each patient receives personalized and professional service.</p>
            <p className="">Experienced team providing compassionate and personalized care for every patient. Your health is our priority. </p>
            <button className="btn btn-primary text-white">Get More Info</button>
        </div>
    </div>
</div>
  );
};

export default About;