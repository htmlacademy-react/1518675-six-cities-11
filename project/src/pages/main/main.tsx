import CityList from '../../components/city-list/city-list';
import CityTabs from '../../components/city-tabs/city-tabs';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import {sortOffers} from '../../const';
import {
  getActiveCity,
  getActiveSorting,
  getOffers,
  getOffersStatus
} from '../../store/offers/selectors';
import {getAuthCheckedStatus} from '../../store/authorization/selectors';
import Preloader from '../../components/preloader/preloader';
import ErrorMessage from '../../components/error-message/error-message';

function Main(): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(null);

  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getActiveCity);
  const activeSorting = useAppSelector(getActiveSorting);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const offersStatus = useAppSelector(getOffersStatus);

  if (!isAuthChecked || offersStatus.isLoading) {
    return (
      <Preloader/>
    );
  }

  if (offersStatus.isError) {
    return (
      <ErrorMessage/>);
  }

  const filteredOffersByCity = offers.filter((item) => item.city.name === activeCity);
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
                offers={sortedOffers}
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
