import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useRating from '../../Hooks/useRating';
import Reviews from './Reviews/Reviews';
import './Service.css';
import useTitle from '../../Hooks/useTitle';

const Service = () => {
  const service = useLoaderData();
  const { _id, image, name, description, rating, price } = service;

  useTitle(name);

  const starsContent = useRating(_id, rating);

  return (
    <>
      <section className="py-8 px-2">
        <div className="flex flex-col items-center justify-center text-center container mx-auto">
          <img className="service-img mb-5 rounded-lg" src={image} alt={name} />

          <div className="flex gap-2 items-center text-1xl text-amber-500 mb-5">{starsContent}</div>
          <p className="mb-3 inline py-3 px-5 rounded-full bg-cgray font-semibold">
            Price: ${price}
          </p>
          <h2 className="mb-3 text-4xl font-bold">{name}</h2>
          <div className="lg:w-1/2">
            <p className="mb-2 lh-18">{description}</p>
          </div>
        </div>
      </section>
      <Reviews serviceId={_id} serviceName={name}></Reviews>
    </>
  );
};

export default Service;

// text, name, and image of the reviewer rating(optional)
