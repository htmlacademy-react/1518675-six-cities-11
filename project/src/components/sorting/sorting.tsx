import {useRef, useState} from 'react';
import cn from 'classnames';
import s from './sorting.module.scss';
import {SORTING_METHODS} from '../../const';
import {changeSorting} from '../../store/action';
import {useAppDispatch} from '../../hooks';
import {useClickAway} from 'react-use';

type SortingProps = {
  activeSorting: string;
}

function Sorting({activeSorting}: SortingProps) {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const optionContainerClass = cn(s.placesOptions, s.placesOptionsCustom, {
    [s.placesOptionsOpened]: open
  });

  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <form className={s.placesSorting} action="src/pages/main/main#" method="get" ref={ref}>
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
          Object.entries(SORTING_METHODS).map(([key, value]) => {

            const optionClass = cn(s.placesOption, {
              [s.placesOptionActive]: key === activeSorting
            });

            const sorting = key;

            return (
              <li
                className={optionClass}
                onClick={() => {
                  setOpen(!open);
                  dispatch(changeSorting({sorting}));
                }}
                key={value.name}
              >
                {value.name}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

export default Sorting;
