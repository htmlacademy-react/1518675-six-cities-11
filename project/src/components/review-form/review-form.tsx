import {FormEvent, useEffect, useState} from 'react';
import RatingItem from '../rating-item/rating-item';
import {newCommentAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {getSendingCommentStatus} from '../../store/comments/selectors';
import cn from 'classnames';
import s from './review-form.module.scss';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';

const typesRating = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

function ReviewForm () {
  const {isSuccess, isLoading} = useAppSelector(getSendingCommentStatus);
  const dispatch = useAppDispatch();
  const currentId = useParams().id;

  const [text, setText] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      setText('');
      setCurrentRating(0);
    }
  }, [isSuccess]);

  const isFormValid = text.length > MIN_REVIEW_LENGTH && text.length < MAX_REVIEW_LENGTH && currentRating;

  const handleRatingChange = (ratingNumber: number) => {
    setCurrentRating(ratingNumber);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(newCommentAction({
      comment: text,
      rating: currentRating,
      id: Number(currentId)
    }));
  };

  const submitButtonClasses = cn('reviews__submit form__submit button', {
    [s.preloaded]: isLoading
  });

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
              currentRating={currentRating}
              onRatingChange={handleRatingChange}
              disabled={isLoading}
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
        disabled={isLoading}
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
        <button
          className={submitButtonClasses}
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          <span className={s.wrapperButton}>
            {isLoading ? 'Submitting' : 'Submit'}
          </span>
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
