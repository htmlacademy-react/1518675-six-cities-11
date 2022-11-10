import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';
import {AuthorizationStatus, Url} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {OfferType} from '../../types/offer-type';

type AppTypes = {
  offers: OfferType[];
}

function App ({offers}: AppTypes) {

  return (
    <BrowserRouter>
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
                authorizationStatus={AuthorizationStatus.Auth}
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
    </BrowserRouter>
  );
}

export default App;
