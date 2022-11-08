import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCards from '../Shared/ServiceCards/ServiceCards';

const Services = () => {
  const services = useLoaderData();
  return (
    <section>
      <div className="container mx-auto mt-10">
        <h2 className="lh-60 text-center text-5xl font-bold">
          My all photography services that satisfied 1,200 + <br />
          customers around the world.
        </h2>
        <ServiceCards services={services}></ServiceCards>
      </div>
    </section>
  );
};

export default Services;
