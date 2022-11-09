import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRating from '../../../Hooks/useRating';
import toast from 'react-hot-toast';

const ReviewRow = ({ review }) => {
  const { _id, serviceId, createdAt, text, rating } = review;
  const [service, setService] = useState({});

  const starsContent = useRating(_id, rating);
  const date = new Date(createdAt);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ROOT}/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  const handleDelete = (event) => {
    const proceed = window.confirm('Are you sure, you want to delete this?');
    if (proceed) {
      fetch(`${process.env.REACT_APP_API_ROOT}/reviews/${_id}`, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('awesomeshot-token')}`,
        },
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success('Successfully deleted the review!');
            event.target.parentNode.parentNode.remove();
          }
        })
        .catch(() => toast.error("Oop's something went very wrong!"));
    }
  };

  return (
    <tr key={_id} className="bg-white border-b">
      <td className="py-4 px-6">{date.toDateString()}</td>
      <td className="py-4 px-6">{service.name}</td>
      <td className="py-4 px-6">{text.length > 100 ? text.substr(0, 100) + '...' : text}</td>
      <td className="py-4 px-6">
        <div className="flex gap-2 items-center text-1xl text-amber-500">{starsContent}</div>
      </td>
      <td className="py-4 px-6 flex gap-4 text-center">
        <Link
          to={`/service/edit/${_id}`}
          className="text-1xl bg-blue-600 hover:bg-blue-800 text-white transition-all py-2 px-4 rounded-full">
          Edit
        </Link>
        <button
          onClick={handleDelete}
          data-modal-toggle="popup-modal"
          className="text-1xl bg-rose-500 hover:bg-rose-600 text-white transition-all py-2 px-4 rounded-full">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
