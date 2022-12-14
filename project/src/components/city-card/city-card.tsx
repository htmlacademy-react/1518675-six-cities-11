import {generatePath, Link} from 'react-router-dom';
import {OfferType} from '../../types/offer-type';
import {Url} from '../../const';
import {capitalizeFirstLetter, calculateWidthRating} from '../../utils';
import {
  changeFavoriteAction
} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import cn from 'classnames';

type CityCardType = {
  offer: OfferType;
  cardType: 'main' | 'favorites' | 'nearby';
  onMouseAction?: (activeCard: number | null) => void;
}

const classesForCards = {
  main: {
    article: 'cities__card place-card',
    imageWrapper: 'cities__image-wrapper place-card__image-wrapper',
    info: 'place-card__info'
  },
  favorites: {
    article: 'favorites__card place-card',
    imageWrapper: 'favorites__image-wrapper place-card__image-wrapper',
    info: 'favorites__card-info place-card__info'
  },
  nearby: {
    article: 'near-places__card place-card',
    imageWrapper: 'near-places__image-wrapper place-card__image-wrapper',
    info: 'place-card__info'
  }
};

function CityCard({offer, cardType, onMouseAction}: CityCardType): JSX.Element {
  const dispatch = useAppDispatch();

  const {article, imageWrapper, info} = classesForCards[cardType];
  const {previewImage, price, id, title, type, rating, isPremium, isFavorite} = offer;

  const ratingWidth = calculateWidthRating(rating);
  const generatedUrl = generatePath(Url.Offer, {id: `${id}`});

  const favoritesClasses = cn('place-card__bookmark-button button', {
    'place-card__bookmark-button--active': isFavorite
  });

  return (
    <article
      className={article}
      onMouseOver={() => onMouseAction ? onMouseAction(id) : null}
      onMouseLeave={() => onMouseAction ? onMouseAction(null) : null}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={imageWrapper}>
        <Link to={generatedUrl} title={generatedUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </Link>
      </div>
      <div className={info}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={() => {
              dispatch(changeFavoriteAction(offer));
            }}
            className={favoritesClasses}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatedUrl} title={generatedUrl}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default CityCard;
