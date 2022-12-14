import ReviewForm from '../../components/review-form/review-form';
import {useParams} from 'react-router-dom';
import {calculateWidthRating, capitalizeFirstLetter} from '../../utils';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import CityCard from '../../components/city-card/city-card';
import CityNearbyList from '../../components/city-nearby-list/city-nearby-list';
import Gallery from '../../components/gallery/gallery';
import {MAX_NEARBY_OBJECTS} from '../../const';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getOffer, getSingleOfferStatus} from '../../store/single-offer/selectors';
import Preloader from '../../components/preloader/preloader';
import ErrorMessage from '../../components/error-message/error-message';
import {
  changeFavoriteAction,
  fetchCommentsAction,
  fetchNearbyOffersAction,
  fetchSingleOfferAction
} from '../../store/api-actions';
import {getComments} from '../../store/comments/selectors';
import {getNearbyOffers, getNearbyOffersStatus} from '../../store/nearby-offers/selectors';
import s from './offer.module.scss';
import cn from 'classnames';

function Offer(): JSX.Element {
  const offerStatus = useAppSelector(getSingleOfferStatus);
  const nearbyOffersStatus = useAppSelector(getNearbyOffersStatus);

  const dispatch = useAppDispatch();
  const offerId = useParams().id;

  useEffect(() => {
    if (offerId) {
      dispatch(fetchSingleOfferAction(offerId));
      dispatch(fetchCommentsAction(offerId));
      dispatch(fetchNearbyOffersAction(offerId));
    }
  }, [offerId, dispatch]);

  const singleOffer = useAppSelector(getOffer);
  const offerComments = useAppSelector(getComments);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  if (offerStatus.isError) {
    return (
      <ErrorMessage/>
    );
  }

  if (offerStatus.isLoading || nearbyOffersStatus.isLoading || singleOffer === null) {
    return (
      <Preloader/>
    );
  }

  const {price, rating, images, title, type, bedrooms, maxAdults, goods, host, description, isPremium, isFavorite} = singleOffer;
  const ratingWidth = calculateWidthRating(rating);

  const svgClasses = cn('property__bookmark-icon', {
    [s.favoriteActive]: isFavorite
  });

  return (
    <div className="page">
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {capitalizeFirstLetter(title)}
                </h1>
                <button
                  onClick={() => {
                    dispatch(changeFavoriteAction(singleOffer));
                  }}
                  className="property__bookmark-button property__bookmark-button--active button"
                  type="button"
                >
                  <svg className={svgClasses} width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingWidth}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro && <span className="property__user-status">Pro</span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments.length}</span></h2>
                <ReviewList comments={offerComments}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map className="property__map" offers={nearbyOffers.slice(0, MAX_NEARBY_OBJECTS)} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CityNearbyList>
              {
                nearbyOffers.map((item) => (
                  <CityCard offer={item} cardType={'nearby'} key={item.id}/>
                ))
              }
            </CityNearbyList>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
