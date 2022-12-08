import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import Notification from './components/notification/notification';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <Notification/>
      <ErrorMessage/>
      <App/>
    </Provider>
  </React.StrictMode>
);
