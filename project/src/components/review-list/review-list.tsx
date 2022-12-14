import ReviewItem from '../review-item/review-item';
import {CommentType} from '../../types/comment-type';
import moment from 'moment';

type ReviewListProps = {
  comments: CommentType[];
}

function ReviewList({comments}: ReviewListProps): JSX.Element {

  const sortingComments = comments
    .slice()
    .sort((a: CommentType, b: CommentType) => moment(a.date).diff(b.date))
    .slice(0, 10);

  return (
    <ul className="reviews__list">
      {
        sortingComments.map((item: CommentType) => (
          <ReviewItem review={item} key={item.id}/>
        ))
      }
    </ul>
  );
}

export default ReviewList;
