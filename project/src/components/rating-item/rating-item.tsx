// import {useState} from 'react';

type RatingItemProps = {
  label: string;
  count: string;
  onRatingChange: (rating: number) => void;
}

function RatingItem ({label, count, onRatingChange}: RatingItemProps) {

  // const [currentRating, setCurrentRating] = useState(0);

  const ratingNumber = Number(count);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={count}
        id={`${count}-stars`}
        type="radio"
        onChange={() => onRatingChange(ratingNumber)}
      />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title={label}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingItem;
