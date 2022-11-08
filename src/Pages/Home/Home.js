import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero/Hero';
import './Home.css';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <HomeServices services={services}></HomeServices>
    </div>
  );
};

export default Home;
