import FavoritesItem from '../favorites-item/favorites-item';

type OfferType = {
  id: number;
  price: number;
  type: string;
  title: string;
  img: string;
}


type FavoritesTypes = {
  offers: OfferType[];
}

function Favorites ({offers}: FavoritesTypes) {

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
                      <FavoritesItem {...item} key={item.id} />
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
