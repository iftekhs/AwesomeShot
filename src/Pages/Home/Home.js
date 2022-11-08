import React from 'react';
import Hero from './Hero/Hero';
import './Home.css';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HomeServices></HomeServices>
    </div>
  );
};

export default Home;
