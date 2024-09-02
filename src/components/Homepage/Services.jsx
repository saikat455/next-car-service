import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { services } from '@/lib/services';

const Services = () => {
    return (
        <div className="text-slate-800 mb-24">
          <div className="text-center container mx-auto">
            <h3 className="text-3xl font-bold text-orange-600 mt-10 mb-4">Our Service Area</h3>
            
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which do not look even slightly
              believable.
            </p>
          </div>
          <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services?.length > 0 &&
              services?.map((service) => (
                <ServiceCard service={service} key={service._id} />
              ))}
          </div>
        </div>
      );
};

export default Services;