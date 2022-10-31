function CityTabs() {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="src/pages/main/main#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="src/pages/main/main#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="src/pages/main/main#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="src/pages/main/main#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="src/pages/main/main#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
