import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {rootReducer} from './root-reducer';

export const api = createAPI();

export const store = configureStore({
  // reducer,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
