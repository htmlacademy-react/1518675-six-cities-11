import s from './error-message.module.scss';
import {getErrorStatus} from '../../store/offers/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchOffersAction} from '../../store/api-actions';

function ErrorMessage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getErrorStatus);

  return (error)
    ?
    <div className={s.error}>
      <h1>Something went wrong</h1>
      <button
        className={s.button}
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        type="button"
      >
        Try again
      </button>
    </div>
    : null;
}

export default ErrorMessage;
