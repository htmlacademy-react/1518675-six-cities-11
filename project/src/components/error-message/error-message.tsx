import {useAppSelector} from '../../hooks';
import s from './error-message.module.scss';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className={s.error}>{error}</div>
    : null;
}

export default ErrorMessage;
