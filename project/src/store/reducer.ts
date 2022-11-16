import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import {offers} from '../mocks/data';

const initialState = {
  city: 'Amsterdam',
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    });
});

export {reducer};
