import ReviewItem from '../review-item/review-item';
import {CommentType} from '../../types/comment-type';

type ReviewListProps = {
  comments: CommentType[];
}

function ReviewList({comments}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments.map((item: CommentType) => (
          <ReviewItem review={item} key={item.id}/>
        ))
      }
    </ul>
  );
}

export default ReviewList;
