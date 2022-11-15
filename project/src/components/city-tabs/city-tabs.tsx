import cn from 'classnames';
import {useAppDispatch} from '../../hooks';
import {filterOffers} from '../../store/action';

type CityTabs = {
  initCity: string;
  // onChangeCityHandler: (evt: SyntheticEvent) => void;
};

function CityTabs({initCity}: CityTabs) {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(filterOffers({city: 'Paris'}));
              }}
              className={cn('locations__item-link tabs__item', {'tabs__item--active': initCity === 'Paris'})}
              href="src/pages/main/main#"
            >
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(filterOffers({city: 'Cologne'}));
              }}
              className={cn('locations__item-link tabs__item', {'tabs__item--active': initCity === 'Cologne'})}
              href="src/pages/main/main#"
            >
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(filterOffers({city: 'Brussels'}));
              }}
              className={cn('locations__item-link tabs__item', {'tabs__item--active': initCity === 'Brussels'})}
              href="src/pages/main/main#"
            >
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(filterOffers({city: 'Amsterdam'}));
              }}
              className={cn('locations__item-link tabs__item', {'tabs__item--active': initCity === 'Amsterdam'})}
              href="src/pages/main/main#"
            >
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(filterOffers({city: 'Hamburg'}));
              }}
              className={cn('locations__item-link tabs__item', {'tabs__item--active': initCity === 'Hamburg'})}
              href="src/pages/main/main#"
            >
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(filterOffers({city: 'Dusseldorf'}));
              }}
              className={cn('locations__item-link tabs__item', {'tabs__item--active': initCity === 'Dusseldorf'})}
              href="src/pages/main/main#"
            >
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
