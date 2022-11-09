import React from 'react';
import useRating from '../../../../Hooks/useRating';

const Review = ({ review }) => {
  const { _id, createdAt, name, text, userPhoto, rating } = review;
  const starsContent = useRating(_id, rating);

  const date = new Date(createdAt);

  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-2 w-6 h-6 rounded-full" src={userPhoto} alt="Michael Gough" />
            {name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateime="2022-02-08" title="February 8th, 2022">
              {date.toDateString()}
            </time>
          </p>
          <div className="ml-2 flex gap-2 items-center text-1xl text-amber-500">{starsContent}</div>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400">{text}</p>
    </article>
  );
};

export default Review;
