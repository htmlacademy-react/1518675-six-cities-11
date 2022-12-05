import {FormEvent, useState} from 'react';
import RatingItem from '../rating-item/rating-item';
import {NewComment} from '../../types/data-type';
import {newCommentAction} from '../../store/api-actions';
// import {redirectToRoute} from '../../store/action';
import {useAppDispatch} from '../../hooks';

const typesRating = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

function ReviewForm () {
  const [text, setText] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  const dispatch = useAppDispatch();

  const validateCommentForm = (comment: string, rating: number) => {
    if (comment.length > 50 && comment.length < 300 && rating) {
      return true;
    }
    return false;
  };

  const handleRatingChange = (ratingNumber: number) => {
    setCurrentRating(ratingNumber);
  };

  const onSubmit = (comment: NewComment) => {
    dispatch(newCommentAction(comment));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: text,
      rating: currentRating
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
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
        onChange={(e) => setText(e.target.value)}
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
          &nbsp;<span className="reviews__star">rating</span>&nbsp;
          and describe your stay with at least
          &nbsp;<b className="reviews__text-amount">50 characters</b>.
        </p>
        {
          validateCommentForm(text, currentRating)
            ?
            <button
              className="reviews__submit form__submit button"
              type="submit"
            >
              Submit
            </button>
            :
            <button
              className="reviews__submit form__submit button"
              type="submit"
              disabled
            >
              Submit
            </button>
        }
      </div>
    </form>
  );
}

export default ReviewForm;
