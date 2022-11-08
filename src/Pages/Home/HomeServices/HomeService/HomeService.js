import React from 'react';
import './HomeService.css';

import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const HomeService = () => {
  return (
    <div className="home-service flex flex-col">
      <img
        className="mb-6 rounded-lg"
        src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <h2 className="mb-3 text-2xl font-bold">Aesthetic Clicks</h2>
      <p className="mb-2 lh-18">
        This service gives you the hyper editing on your photos and make them look asthetic and cool
        them look asthetic and cool
      </p>
      <div className="flex gap-2 items-center text-1xl text-amber-500 mb-8">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
      <div className="-ml-1 mb-10">
        <p className="inline py-3 px-5 rounded-full bg-cgray font-semibold">Price: $99.99</p>
      </div>
      <div className="-ml-1">
        <Link
          to="/"
          className="py-3 px-5 bg-blue-600 transition-all hover:bg-blue-800 text-white rounded-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
