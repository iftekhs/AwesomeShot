import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewRow from './ReviewRow/ReviewRow';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user, logOut } = useContext(AuthContext);

  useTitle('My Reviews');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('awesomeshot-token')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, [user, logOut]);

  return (
    <section className="py-8 px-2">
      <div className="container mx-auto">
        <h2 className="mb-3 text-2xl font-bold">All Reviews ({reviews.length})</h2>
        {reviews.length > 0 ? (
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Created At
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Service
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Review
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Rating
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <ReviewRow key={review._id} review={review}></ReviewRow>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-80 flex items-center justify-center">
            <p className="text-4xl font-bold">No reviews were added</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyReviews;
