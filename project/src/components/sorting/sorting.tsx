function Sorting() {

  return (
    <form className="places__sorting" action="src/pages/main/main#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active">Popular</li>
        <li className="places__option">Price: low to high</li>
        <li className="places__option">Price: high to low</li>
        <li className="places__option">Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
