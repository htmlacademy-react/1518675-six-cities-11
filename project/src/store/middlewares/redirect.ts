import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import {reducer} from '../reducer';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'user/redirectToRoute') {
          console.log(action.type);
          browserHistory.push(action.payload);
        }

        return next(action);
      };
