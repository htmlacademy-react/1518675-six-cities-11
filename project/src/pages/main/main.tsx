import CityList from '../../components/city-list/city-list';
import {OfferType} from '../../types/offer-type';
import CityTabs from '../../components/city-tabs/city-tabs';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import {sortOffers} from '../../const';
import {getActiveCity, getActiveSorting, getOffers} from '../../store/data-offers/selectors';

type MainProps = {
  offers: OfferType[];
};

function Main({offers}: MainProps): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const allOffers = useAppSelector(getOffers);
  const activeSorting = useAppSelector(getActiveSorting);

  const [activeId, setActiveId] = useState<number | null>(null);

  const filteredOffersByCity = allOffers.filter((item) => item.city.name === activeCity);
  const filteredOffersAmount = filteredOffersByCity.length;
  const sortedOffers = sortOffers(filteredOffersByCity, activeSorting);

  const handleMouseAction = (id: number | null) => {
    setActiveId(id);
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
              <Sorting activeSorting={activeSorting}/>
              <CityList
                onCardHover={handleMouseAction}
                offers={sortedOffers}
              />
            </section>
            <div className="cities__right-section">
              <Map
                className="cities__map"
                offers={offers}
                selectedCard={activeId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
