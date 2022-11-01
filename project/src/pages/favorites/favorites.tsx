import {OfferType} from '../../types/offer-type';
import CityCard from '../../components/city-card/city-card';
import FavoritesCitySection from '../../components/favorites-city-section/favorites-city-section';

type FavoritesType = {
  offers: OfferType[];
}

type filteredOffersType = {
  [key: string]: OfferType[];
}

function Favorites({offers}: FavoritesType) {

  const filteredOffersByCities: filteredOffersType = {};

  // const newFilteredOffers = offers.reduce((result: filteredOffersType, current, index) => {
  //
  //   if (!Object.hasOwn(result, current.city.name)) {
  //     return {
  //       ...result, [current.city.name]: [current]
  //     }
  //   }
  //
  //   return {
  //     ...result, [current.city.name]: [current]
  //   };
  // });

  offers.forEach((offer) => {
    if (!filteredOffersByCities[offer.city.name]) {
      filteredOffersByCities[offer.city.name] = [];
    }

    filteredOffersByCities[offer.city.name].push(offer);
  });

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {
                Object.keys(filteredOffersByCities).map((value) => (

                  <FavoritesCitySection city={value} key={value}>

                    <>
                      {
                        filteredOffersByCities[value].map((item: OfferType) => (
                          <CityCard
                            offer={item}
                            cardType="favorites"
                            key={item.id}
                          />
                        ))
                      }
                    </>

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
