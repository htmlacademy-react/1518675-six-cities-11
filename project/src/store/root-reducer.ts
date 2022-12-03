import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import {dataOffers} from './data-offers/data-offers';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataOffers.reducer,
  [NameSpace.User]: userProcess.reducer,
});
