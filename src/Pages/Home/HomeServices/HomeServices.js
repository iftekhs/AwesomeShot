import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServiceCards from '../../Shared/ServiceCards/ServiceCards';
import './HomeServices.css';

const HomeServices = ({ services }) => {
  return (
    <section className="home-services-section py-8 px-2">
      <div className="container mx-auto">
        <p className="text-center text-lg text-blue-600 mb-5 font-semibold">MY TOP SERVICES</p>
        <h2 className="lh-60 text-center text-5xl font-bold">
          My top rated services that satisfied 1,200+ <br /> customers Around the world
        </h2>
        <ServiceCards services={services}></ServiceCards>
        <div className="container flex items-center justify-center mx-auto mt-16">
          <Link
            to="/services"
            className="flex items-center gap-2 py-3 px-5 bg-blue-600 transition-all hover:bg-blue-800 text-white rounded-full">
            See All <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
