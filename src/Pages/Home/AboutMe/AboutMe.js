import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const skills = [
    {
      _id: 1,
      name: 'Food Photography',
      description:
        'Food photography is an area of photography where food is photographed as the main subject for still images.',
    },
    {
      _id: 2,
      name: 'Product Photography',
      description:
        "Product photography, or e-commerce photography as it's sometimes known, is basically what it sounds like: photos taken and used on websites and social media platforms to help drive sales of your product or service.",
    },
    {
      _id: 3,
      name: 'Wedding Photography',
      description:
        'Wedding photographers capture memories for brides and grooms, creating a photographic narrative of wedding ceremonies.',
    },
    {
      _id: 4,
      name: 'Photoshop',
      description:
        'Adobe Photoshop is a raster graphics editor. It is an image creation, graphic design and photo editing software developed by Adobe.',
    },
  ];

  return (
    <section className="py-8 px-2">
      <div className="container mx-auto">
        <p className="text-center text-lg text-blue-600 mb-5 font-semibold">About</p>
        <h2 className="mb-10 lh-60 text-center text-5xl font-bold">All About Me</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="photographer-img-container mb-5">
            <img
              className="rounded-lg"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
              alt=""
            />
          </div>
          <p className="lh-18 mb-5">
            <span className="text-8xl font-bold">H</span>i, my name is john, and I am a professional
            photographer based in NYC. I specialize in product photography, food photography,
            wedding photography, and sports photography. My goal is to create an atmosphere where
            people feel comfortable being themselves. I've been working as a photographer for over
            five years and have worked with some amazing companies including Nike, Adidas, and AT&T.
            My favorite part about being a photographer is getting to see my clients have fun while
            they're at work! Whether they're eating tasty food or playing with their friends and
            family on the field or rink, it's always fun when there's a camera around. In addition
            to my photographic skills, I'm also great at communicating with people. I understand how
            intimidating it can be to step in front of a camera—especially if you're not used to
            being photographed—so I make sure to put everyone at ease so we can have fun creating
            amazing images together! If you're looking for someone who can capture your brand's
            story perfectly then please don't hesitate to reach out via email at
            photographer@email.com.
          </p>
          <h2 className="mb-10 lh-60 text-center text-5xl font-bold">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {skill.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
