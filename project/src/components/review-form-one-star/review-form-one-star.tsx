type ReviewFormOneStarType = {
  label: string;
  count: number;
}

function ReviewFormOneStar ({label, count}: ReviewFormOneStarType) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={count} id={`${count}-stars`} type="radio"/>
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title={label}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewFormOneStar;
