import s from './error-message.module.scss';
import {getErrorStatus} from '../../store/data-offers/selectors';
import {useAppSelector} from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorStatus);

  return (error)
    ? <div className={s.error}>{error}</div>
    : null;
}

export default ErrorMessage;
