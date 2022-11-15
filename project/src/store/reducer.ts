import {createReducer} from '@reduxjs/toolkit';
import {filterOffers} from './action';
import {offers} from '../mocks/data';

const initialState = {
  city: 'Amsterdam',
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterOffers, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
});

export {reducer};
