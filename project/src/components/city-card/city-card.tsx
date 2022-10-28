import {generatePath, Link} from 'react-router-dom';
import {OfferType} from '../../types/offer-type';
import {Url} from '../../const';
import {capitalizeFirstLetter} from '../../utils';

type CityCardType = {
  offer: OfferType;
  cardType: string;
  activeCardMouseHandler: boolean;
  setActiveCardMouseHandler: (activeCard: boolean) => void | undefined;
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
    info: 'favorites__image-wrapper place-card__image-wrapper'
  }
};

type objectCardType = {
  article: string;
  imageWrapper: string;
  info: string;
}

type objectCardTypeWrapper = {
  main: objectCardType;
  favorites: objectCardType;
}

function CityCard({offer, activeCardMouseHandler, setActiveCardMouseHandler, cardType}: CityCardType): JSX.Element {

  const {article, imageWrapper, info} = classesForCards[cardType as keyof objectCardTypeWrapper];
  const {img, price, id, title, type} = offer;
  const generatedUrl = generatePath(Url.Offer, {id: `${id}`});

  return (
    <article
      className={article}
      onMouseOver={() => setActiveCardMouseHandler(!activeCardMouseHandler)}
      onMouseLeave={() => setActiveCardMouseHandler(!activeCardMouseHandler)}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={imageWrapper}>
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt={title} />
        </a>
      </div>
      <div className={info}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">

          <Link to={generatedUrl} title={generatedUrl} >
            {title}
          </Link>

        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default CityCard;
