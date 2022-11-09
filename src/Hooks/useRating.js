import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const useRating = (_id, rating) => {
  const stars = [...Array(Math.floor(rating)).keys()];
  const halfStar = rating - Math.floor(rating) !== 0;

  const starsContent = (
    <>
      {stars.map((star) => (
        <FaStar key={_id + star}></FaStar>
      ))}
      {halfStar && <FaStarHalfAlt></FaStarHalfAlt>}
    </>
  );

  return starsContent;
};

export default useRating;
