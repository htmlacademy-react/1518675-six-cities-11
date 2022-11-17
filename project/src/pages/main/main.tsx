import CityList from '../../components/city-list/city-list';
import {OfferType} from '../../types/offer-type';
import CityTabs from '../../components/city-tabs/city-tabs';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';

type MainProps = {
  offers: OfferType[];
};

function Main({offers}: MainProps): JSX.Element {

  const activeCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);

  const [, setActiveId] = useState<number | null>(null);

  const filteredOffersByCity = allOffers.filter((item) => item.city.name === activeCity);
  const filteredOffersAmount = filteredOffersByCity.length;

  const sortedOffersPriceToHigh = filteredOffersByCity.sort((a, b) => a.price - b.price);
  console.log(sortedOffersPriceToHigh);

  const handleMouseAction = (activeId: number | null) => {
    setActiveId(activeId);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityTabs activeCity={activeCity}/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffersAmount} places to stay in {activeCity}</b>

              <Sorting/>

              <CityList
                onCardHover={handleMouseAction}
                offers={filteredOffersByCity}
              />

            </section>
            <div className="cities__right-section">

              <Map
                className="cities__map"
                offers={offers}
                // selectedPoint={selectedPoint}
              />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
