import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServiceCards from '../Shared/ServiceCards/ServiceCards';
import Spinner from '../Shared/Spinner/Spinner';

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle('Services');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-8 px-2">
      <div className="container mx-auto mt-10">
        <h2 className="md:lh-60 text-center text-3xl md:text-5xl font-bold">
          My all photography services that satisfied 1,200 + <br />
          customers around the world.
        </h2>

        {services.length > 0 ? (
          <ServiceCards services={services}></ServiceCards>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </section>
  );
};

export default Services;
