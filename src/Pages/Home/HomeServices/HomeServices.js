import React from 'react';
import HomeService from './HomeService/HomeService';
import './HomeServices.css';

const HomeServices = ({ services }) => {
  return (
    <section className="home-services-section py-8 px-2">
      <div className="container mx-auto">
        <p className="text-center text-lg text-blue-600 mb-5 font-semibold">MY TOP SERVICES</p>
        <h2 className="lh-60 text-center text-5xl font-bold">
          MY top rated services that satisfied 1,200+ <br /> customers Around the world
        </h2>
        <div className="home-services mt-10 flex flex-wrap justify-center lg:justify-between">
          {services.map((service) => (
            <HomeService key={service._id} service={service}></HomeService>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
