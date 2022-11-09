import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      _id: 1,
      altText: 'Food photo',
      link: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      _id: 2,
      altText: 'Pizza photo',
      link: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      _id: 3,
      altText: 'Watch photo',
      link: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      _id: 4,
      altText: 'Interior photo',
      link: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      _id: 5,
      altText: 'Product photo',
      link: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      _id: 6,
      altText: 'Mountain photo',
      link: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <section className="mb-20 py-24 px-2 bg-slate-900">
      <div className="text-white container mx-auto">
        <p className="text-center text-lg text-blue-600 mb-5 font-semibold">MY GALLERY</p>
        <h2 className="mb-10 lh-60 text-center text-5xl font-bold">
          Some of my awesome work <br /> that may convince you.
        </h2>
        <div className="gallery-images flex flex-wrap gap-4 items-center justify-center">
          {galleryImages.map((gi) => (
            <img key={gi._id} className="rounded-lg" src={gi.link} alt={gi.altText} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
