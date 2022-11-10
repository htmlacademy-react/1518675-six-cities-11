import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: string[];
}

function ReviewList({reviews}: ReviewListProps) {

  return (
    <ul className="reviews__list">
      {
        reviews.map((item: string) => (
          <ReviewItem comment={item} key={item}/>
        ))
      }
    </ul>
  );
}

export default ReviewList;
