import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { _id, image, name, description, rating, price } = service;
  return (
    <div className="home-service flex flex-col">
      <img className="mb-6 rounded-lg" src={image} alt="" />
      <h2 className="mb-3 text-2xl font-bold">{name}</h2>
      <p className="mb-2 lh-18">
        {description.length > 100 ? description.substring(0, 100) + '...' : description}
      </p>
      <div className="flex gap-2 items-center text-1xl text-amber-500 mb-8">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
      <div className="-ml-1 mb-10">
        <p className="inline py-3 px-5 rounded-full bg-cgray font-semibold">Price: ${price}</p>
      </div>
      <div className="-ml-1 mt-auto">
        <Link
          to={`/service/${_id}`}
          className="py-3 px-5 bg-blue-600 transition-all hover:bg-blue-800 text-white rounded-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
