import CityList from '../../components/city-list/city-list';
import {OfferType} from '../../types/offer-type';
import CityTabs from '../../components/city-tabs/city-tabs';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';

type MainProps = {
  offers: OfferType[];
};

function Main({offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityTabs/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>

              <Sorting/>

              <CityList offers={offers} />

            </section>
            <div className="cities__right-section">

              <Map className="cities__map" />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
