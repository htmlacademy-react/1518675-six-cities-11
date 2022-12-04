import {Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';
import {Url} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {OfferType} from '../../types/offer-type';
import {useAppSelector} from '../../hooks';
import Preloader from '../preloader/preloader';
// import NoData from '../no-data/no-data';
import ErrorMessage from '../error-message/error-message';
import {getAuthCheckedStatus, getAuthorizationStatus} from '../../store/user-process/selectors';
import {getErrorStatus, getOffersDataLoadingStatus} from '../../store/data-offers/selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppTypes = {
  offers: OfferType[];
}

function App ({offers}: AppTypes) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const isNoData = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <Preloader/>
    );
  }

  if (isNoData) {
    return (
      <ErrorMessage/>);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={<Main offers={offers}/>}
          />
          <Route
            path={Url.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favorites
                  offers={offers}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={Url.Offer}
            element={<Offer/>}
          />
        </Route>
        <Route
          path={Url.Login}
          element={<Login/>}
        />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
