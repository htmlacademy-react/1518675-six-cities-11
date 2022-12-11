import {OfferType} from '../../types/offer-type';
import CityCard from '../../components/city-card/city-card';
import FavoritesCitySection from '../../components/favorites-city-section/favorites-city-section';
import {useAppSelector} from '../../hooks';
import {getFavorites, getFavoritesStatus} from '../../store/favorites/selectors';
import ErrorMessage from '../../components/error-message/error-message';
import Preloader from '../../components/preloader/preloader';
import {getOffers} from '../../store/offers/selectors';

type FilteredOffersType = {
  [key: string]: OfferType[];
}

function Favorites() {
  const favoritesStatus = useAppSelector(getFavoritesStatus);
  const favorites = useAppSelector(getFavorites);

  const offers = useAppSelector(getOffers);
  const favoritesOffers = offers.slice().filter((item) => !item.isFavorite);

  if (favoritesStatus.isError) {
    return (
      <ErrorMessage/>
    );
  }

  if (favoritesStatus.isLoading || favorites === null) {
    return (
      <Preloader/>
    );
  }

  if (!favoritesOffers.length) {
    return <h1>No favorite offers</h1>;
  }

  const filteredOffersByCities = favorites.slice().reduce<FilteredOffersType>((acc, current) => {
    if (!acc[current.city.name]) {
      acc[current.city.name] = [];
    }

    acc[current.city.name].push(current);
    return acc;
  }, {});

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.entries(filteredOffersByCities).map(([city, cityOffers]) => (
                  <FavoritesCitySection city={city} key={city}>
                    {
                      cityOffers.map((item: OfferType) => (
                        <CityCard
                          offer={item}
                          cardType="favorites"
                          key={item.id}
                        />
                      ))
                    }
                  </FavoritesCitySection>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Favorites;
