type RatingItemProps = {
  label: string;
  count: string;
  onRatingChange: (rating: number) => void;
  disabled: boolean;
  currentRating: number;
}

function RatingItem ({label, count, disabled, onRatingChange, currentRating}: RatingItemProps) {

  const revertIndex = 6 - Number(count);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={revertIndex}
        id={`${revertIndex}-stars`}
        type="radio"
        onChange={() => onRatingChange(revertIndex)}
        disabled={disabled}
        checked={currentRating === revertIndex}
      />
      <label htmlFor={`${revertIndex}-stars`} className="reviews__rating-label form__rating-label" title={label}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingItem;
