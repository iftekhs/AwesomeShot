import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useRating from '../../../Hooks/useRating';

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleRedirect = () => {
    if (!user || !user.uid) {
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
  };

  const handleSubmit = () => {};

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Reviews (20)
          </h2>
        </div>

        {user && user.uid ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required></textarea>
            </div>

            <label
              for="rating"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Select Rating
            </label>
            <select
              defaultValue={5}
              name="rating"
              id="rating"
              className="mb-5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>

            <button
              type="submit"
              className="py-3 px-5 bg-blue-600 transition-all hover:bg-blue-800 text-white rounded-full">
              Post review
            </button>
          </form>
        ) : (
          <>
            <p className="mb-5 text-1xl ">Please login to submit a review!</p>
            <button
              onClick={handleRedirect}
              className="py-2 px-5 bg-blue-600 transition-all hover:bg-blue-800 text-white rounded-full">
              Log in
            </button>
          </>
        )}

        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
              <div className="ml-2 flex gap-2 items-center text-1xl text-amber-500">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank you! But tools are just
            the instruments for the UX designers. The knowledge of the design tools are as important
            as the creation of the design strategy.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Reviews;
