import {OfferType} from '../../types/offer-type';
import CityCard from '../../components/city-card/city-card';
import FavoritesCitySection from '../../components/favorites-city-section/favorites-city-section';

type FavoritesType = {
  offers: OfferType[];
}

type FilteredOffersType = {
  [key: string]: OfferType[];
}

function Favorites({offers}: FavoritesType) {

  const filteredOffersByCities = offers.reduce<FilteredOffersType>((acc, current) => {

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
