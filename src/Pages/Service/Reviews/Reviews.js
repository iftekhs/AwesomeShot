import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Review from './Review/Review';

const Reviews = ({ serviceId, serviceName }) => {
  const { user, logOut } = useContext(AuthContext);

  const [btnLoading, setBtnLoading] = useState(false);
  const [changed, setChanged] = useState(false);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!user || !user.uid) {
      return navigate(`/login?intended=${location.pathname}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setBtnLoading(true);

    const form = event.target;

    const name = user?.displayName || 'unknown';
    const email = user?.email || 'unregistered';
    const userPhoto = user?.photoURL || '';
    const text = form.text.value;
    const rating = form.rating.value;

    const review = {
      name,
      serviceId,
      serviceName,
      email,
      userPhoto,
      text,
      rating,
    };

    fetch(`${process.env.REACT_APP_API_ROOT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('awesomeshot-token')}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          setChanged(!changed);
          toast.success('Successfully added the review!');
        }
      })
      .catch(() => toast.error("Oop's something went very wrong!"))
      .finally(() => {
        setBtnLoading(false);
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/reviews/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [changed, serviceId]);

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Reviews ({reviews.length})
          </h2>
        </div>

        {user && user.uid ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="review" className="sr-only">
                Your review
              </label>
              <textarea
                name="text"
                id="review"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                placeholder="Write a comment..."
                required></textarea>
            </div>

            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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
              {btnLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="mr-2 w-6 h-6 text-blue-600 fill-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : (
                'Post review'
              )}
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

        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
