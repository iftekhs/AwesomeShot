import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './ServiceCards.css';

const ServiceCards = ({ services }) => {
  return (
    <div className="services-cards mt-10 flex flex-wrap justify-center lg:justify-between">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default ServiceCards;
