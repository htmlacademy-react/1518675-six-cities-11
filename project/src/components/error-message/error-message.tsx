import s from './error-message.module.scss';
import {getErrorStatus} from '../../store/data-offers/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchOffersAction} from '../../store/api-actions';

function ErrorMessage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getErrorStatus);

  return (error)
    ?
    <div className={s.error}>
      {error}
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        type="button"
      >
        Попробовать ещё раз
      </button>
    </div>
    : null;
}

export default ErrorMessage;
