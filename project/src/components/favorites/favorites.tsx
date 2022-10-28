// import FavoritesItem from '../favorites-item/favorites-item';
import {OfferType} from '../../types/offer-type';
import CityCard from '../city-card/city-card';
import {CardType} from '../../const';
import {useState} from 'react';

type FavoritesTypes = {
  offers: OfferType[];
}

function Favorites ({offers}: FavoritesTypes) {

  const [activeCardMouseHandler, setActiveCardMouseHandler] = useState(false);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offers.map((item: OfferType) => (
                      <CityCard
                        offer={item}
                        key={item.id}
                        cardType={CardType.Favorites}
                        activeCardMouseHandler={activeCardMouseHandler}
                        setActiveCardMouseHandler={setActiveCardMouseHandler}
                      />
                    ))
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Favorites;
