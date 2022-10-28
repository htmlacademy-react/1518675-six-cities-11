import {useState} from 'react';
import ReviewFormOneStar from '../review-form-one-star/review-form-one-star';

const typesRating = [
  { label: 'perfect', count: 5 },
  { label: 'good', count: 4 },
  { label: 'not bad', count: 3 },
  { label: 'badly', count: 2 },
  { label: 'terribly', count: 1 }
];

type ReviewFormOneStarType = {
  label: string;
  count: number;
}

function ReviewForm () {
  const [text, setText] = useState('');

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          typesRating.map((item: ReviewFormOneStarType) => (
            <ReviewFormOneStar label={item.label} count={item.count} key={item.count} />
          ))
        }
      </div>
      <textarea
        onChange={(evt) => setText(evt.target.value)}
        value={text}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
        {text}
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
