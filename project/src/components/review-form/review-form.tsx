import {FormEvent, useEffect, useState} from 'react';
import RatingItem from '../rating-item/rating-item';
import {newCommentAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {getSendingCommentStatus} from '../../store/comments/selectors';
import {CommentType} from '../../types/comment-type';
import cn from 'classnames';
import s from './review-form.module.scss';

const typesRating = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

function ReviewForm () {
  const sendingCommentStatus = useAppSelector(getSendingCommentStatus);

  const [text, setText] = useState('');
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    setText('');
    setCurrentRating(0);
  }, [sendingCommentStatus.isSuccess]);

  const currentId = useParams().id;
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

  const onSubmit = (comment: CommentType) => {
    dispatch(newCommentAction(comment));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: text,
      rating: currentRating,
      id: currentId
    });
  };

  const submitButtonClasses = cn('reviews__submit form__submit button', {
    [s.disabled]: !validateCommentForm(text, currentRating),
    [s.preloaded]: sendingCommentStatus.isLoading
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
        <button
          className={submitButtonClasses}
          type="submit"
          tabIndex="-1"
        >
          <span className={s.wrapperButton}>Submit<span className={s.caption}>ting..</span></span>
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
