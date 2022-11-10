import React from 'react';
import { Link } from 'react-router-dom';
import useRating from '../../../Hooks/useRating';

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, serviceName, createdAt, text, rating } = review;

  const starsContent = useRating(_id, rating);
  const date = new Date(createdAt);

  return (
    <tr key={_id} className="bg-white border-b">
      <td className="py-4 px-6">{date.toDateString()}</td>
      <td className="py-4 px-6">{serviceName}</td>
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
          onClick={() => handleDelete(_id)}
          data-modal-toggle="popup-modal"
          className="text-1xl bg-rose-500 hover:bg-rose-600 text-white transition-all py-2 px-4 rounded-full">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
