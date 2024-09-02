import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            style={{ 
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] rounded-xl"
          >
            <div className="h-full w-full flex items-center pl-16"> 
              <div className="space-y-6 max-w-md">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <div>
                  <button className="btn btn-primary mr-4">Learn More</button>
                  <button className="btn btn-outline text-white">Book Appointment</button>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <a href={banner.next} className="btn btn-circle ml-6">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Expert Medical Consultations",
    description:
      "Receive expert medical advice and consultations from our skilled healthcare professionals. Your health is our top priority.",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Comprehensive Health Check-ups",
    description:
      "Stay on top of your health with our thorough check-ups and diagnostic services. Early detection and prevention are key.",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Fast & Reliable Emergency Care",
    description:
      "Get immediate and reliable care during emergencies. Our team is equipped to handle urgent medical situations with expertise.",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Personalized Wellness Programs",
    description:
      "Enhance your well-being with our customized wellness programs tailored to your individual needs and goals.",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
