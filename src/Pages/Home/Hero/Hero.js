import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero px-2">
      <div className="hero-content flex flex-col text-white container mx-auto items-center justify-center">
        <h1 className="text-center md:lh-80 text-3xl md:text-6xl font-bold">
          Premium PhotoShoots <br />
          For Product, Wedding, Aesthetic <br />
          And More
        </h1>

        <p className="text-center mt-5 md:text-lg font-semibold">
          I am specialize in premium photo shoots <br /> whether it's Product Photography, weddings
          or just an aesthetic shoot - I can do it all!
        </p>

        <Link
          to="/services"
          className="text-1xl bg-blue-600 hover:bg-blue-800 transition-all py-3 px-8 mt-5 rounded-full">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
