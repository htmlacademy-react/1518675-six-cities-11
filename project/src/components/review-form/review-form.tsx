import {useState} from 'react';
import RatingItem from '../rating-item/rating-item';

const typesRating = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

function ReviewForm () {
  const [text, setText] = useState('');

  // const [currentRating, setCurrentRating] = useState(0);

  const handleRatingChange = (ratingNumber: number) => {
    console.log(ratingNumber);
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(typesRating).map(([key, value]) => (
            <RatingItem
              label={value}
              count={key}
              key={key}
              onRatingChange={handleRatingChange}
            />
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
