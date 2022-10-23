import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
import NotFoundPage from '../not-found-page/not-found-page';
import Layout from '../layout/layout';
import Login from '../login/login';
import {AuthorizationStatus, Url} from '../../const';
import PrivateRoute from '../private-route/private-route';

const mockPrices = [
  { id: 1, price: 100 },
  { id: 2, price: 789 },
  { id: 3, price: 122 },
  { id: 4, price: 32 },
  { id: 5, price: 666 },
  { id: 6, price: 69 }
];

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={<Main prices={mockPrices}/>}
          />
          <Route
            path={Url.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Favorites/>
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
