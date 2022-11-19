import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSorting} from './action';
import {offers} from '../mocks/data';
import {DEFAULT_SORTING} from '../const';

const initialState = {
  city: 'Amsterdam',
  offers,
  sorting: DEFAULT_SORTING
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(changeSorting, (state, action) => {
      const {sorting} = action.payload;
      state.sorting = sorting;
    });
});

export {reducer};
