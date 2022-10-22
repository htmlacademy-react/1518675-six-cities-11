import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../main/main';
// import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import NoPage from '../no-page/no-page';
import Layout from '../layout/layout';
import Login from '../login/login';
import {AuthorizationStatus} from '../../const';
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
            path='/favorites'
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Login/>
              </PrivateRoute>
            }
          />
          <Route
            path='/offer/:id'
            element={<Offer/>}
          />
          <Route
            path='/favorites-empty'
            element={<FavoritesEmpty/>}
          />
        </Route>
        <Route
          path='/login'
          element={<Login/>}
        />
        <Route path='*' element={<NoPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
