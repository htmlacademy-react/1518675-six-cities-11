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


          {/*<li className="locations__item">*/}
          {/*  <a*/}
          {/*    onClick={(evt) => {*/}
          {/*      evt.preventDefault();*/}
          {/*      dispatch(changeCity({city}));*/}
          {/*    }}*/}
          {/*    className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === 'Paris'})}*/}
          {/*    href="src/pages/main/main#"*/}
          {/*  >*/}
          {/*    <span>Paris</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="locations__item">*/}
          {/*  <a*/}
          {/*    onClick={(evt) => {*/}
          {/*      evt.preventDefault();*/}
          {/*      dispatch(changeCity({city: 'Cologne'}));*/}
          {/*    }}*/}
          {/*    className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === 'Cologne'})}*/}
          {/*    href="src/pages/main/main#"*/}
          {/*  >*/}
          {/*    <span>Cologne</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="locations__item">*/}
          {/*  <a*/}
          {/*    onClick={(evt) => {*/}
          {/*      evt.preventDefault();*/}
          {/*      dispatch(changeCity({city: 'Brussels'}));*/}
          {/*    }}*/}
          {/*    className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === 'Brussels'})}*/}
          {/*    href="src/pages/main/main#"*/}
          {/*  >*/}
          {/*    <span>Brussels</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="locations__item">*/}
          {/*  <a*/}
          {/*    onClick={(evt) => {*/}
          {/*      evt.preventDefault();*/}
          {/*      dispatch(changeCity({city: 'Amsterdam'}));*/}
          {/*    }}*/}
          {/*    className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === 'Amsterdam'})}*/}
          {/*    href="src/pages/main/main#"*/}
          {/*  >*/}
          {/*    <span>Amsterdam</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="locations__item">*/}
          {/*  <a*/}
          {/*    onClick={(evt) => {*/}
          {/*      evt.preventDefault();*/}
          {/*      dispatch(changeCity({city: 'Hamburg'}));*/}
          {/*    }}*/}
          {/*    className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === 'Hamburg'})}*/}
          {/*    href="src/pages/main/main#"*/}
          {/*  >*/}
          {/*    <span>Hamburg</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="locations__item">*/}
          {/*  <a*/}
          {/*    onClick={(evt) => {*/}
          {/*      evt.preventDefault();*/}
          {/*      dispatch(changeCity({city: 'Dusseldorf'}));*/}
          {/*    }}*/}
          {/*    className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === 'Dusseldorf'})}*/}
          {/*    href="src/pages/main/main#"*/}
          {/*  >*/}
          {/*    <span>Dusseldorf</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
