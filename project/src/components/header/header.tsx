import Logo from '../logo/logo';
import {AuthorizationStatus, Url} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUserEmail} from '../../store/authorization/selectors';
import {getFavorites} from '../../store/favorites/selectors';
import {logoutAction} from '../../store/api-actions';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({authorizationStatus}: HeaderProps): JSX.Element {
  const email = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo type="header"/>

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth
                  ?
                  <>
                    <li className="header__nav-item user">
                      <Link to={Url.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{email}</span>
                        <span
                          className="header__favorite-count"
                        >
                          {favorites?.length || 0}
                        </span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        to={Url.Login}
                        className="header__nav-link"
                        onClick={() => dispatch(logoutAction)}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <li className="header__nav-item user">
                    <Link
                      to={Url.Login}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
