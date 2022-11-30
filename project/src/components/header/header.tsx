import Logo from '../logo/logo';
import {AuthorizationStatus, Url} from '../../const';
import {Link} from 'react-router-dom';
import {dropToken} from '../../services/token';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({authorizationStatus}: HeaderProps): JSX.Element {

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
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        to={Url.Login}
                        className="header__nav-link"
                        onClick={() => dropToken()}
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
