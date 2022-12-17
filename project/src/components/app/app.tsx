import {Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';
import {Url} from '../../const';
// import PrivateRoute from '../private-route/private-route';
// import {getAuthorizationStatus} from '../../store/authorization/selectors';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App() {
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={<Main/>}
          />
          <Route
            path={Url.Favorites}
            element={
              // <PrivateRoute
              //   authorizationStatus={authorizationStatus}
              // >
              <Favorites/>
              // </PrivateRoute>
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
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRoute>
  );
}

export default App;
