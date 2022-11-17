import cn from 'classnames';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import {CITIES} from '../../const';

type CityTabsProps = {
  activeCity: string;
};

function CityTabs({activeCity}: CityTabsProps) {

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {
            CITIES.map((city) => {
              const tabClass = cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === city});

              return (
                <li className="locations__item" key={city}>
                  <a
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(changeCity({city}));
                    }}
                    className={tabClass}
                    href="/#"
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })
          }

        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
