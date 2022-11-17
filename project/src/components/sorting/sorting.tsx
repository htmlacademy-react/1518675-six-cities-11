import {useState} from 'react';
import cn from 'classnames';
import s from './sorting.module.scss';
import {SORTING} from '../../const';
import {changeSorting} from '../../store/action';
import {useAppDispatch} from '../../hooks';

type SortingProps = {
  activeSorting: string;
}

function Sorting({activeSorting}: SortingProps) {

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [active, ] = useState('Popular');

  const optionContainerClass = cn(s.placesOptions, s.placesOptionsCustom, {
    [s.placesOptionsOpened]: open
  });

  const optionClass = cn(s.placesOption, {
    [s.placesOptionActive]: active
  });

  return (
    <form className={s.placesSorting} action="src/pages/main/main#" method="get">
      <span className={s.placesSortingCaption}>Sort by</span>
      <span
        className={s.placesSortingType}
        onClick={() => setOpen(!open)}
      >
        Popular
        <svg className={s.placesSortingArrow} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={optionContainerClass}>

        {
          SORTING.map((sorting) => (
            <li
              className={optionClass}
              onClick={() => {
                dispatch(changeSorting({sorting}));
              }}
              key={sorting}
            >
              {sorting}
            </li>
          ))
        }

      </ul>
    </form>
  );
}

export default Sorting;
