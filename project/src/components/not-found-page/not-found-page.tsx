import {Link} from 'react-router-dom';
import s from './not-found-page.module.css';
import {Url} from '../../const';


function NotFoundPage () {
  return (
    <div className={s.wrapper}>
      <h1>Page not found</h1>
      <Link
        className={s.button}
        to={Url.Main}
        title={Url.Main}
      >
        Back to main page
      </Link>
    </div>
  );
}

export default NotFoundPage;
