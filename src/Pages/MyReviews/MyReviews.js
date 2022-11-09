import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user, logOut } = useContext(AuthContext);

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
        console.log(data);
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, [user, logOut]);

  return (
    <section className="py-8 px-2">
      <div className="container mx-auto">h</div>
    </section>
  );
};

export default MyReviews;
