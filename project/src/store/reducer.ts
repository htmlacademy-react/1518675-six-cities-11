import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeSorting,
  loadOffers,
  setError,
  setNoDataStatus,
  setOffersDataLoadingStatus
} from './action';
import {DEFAULT_SORTING} from '../const';
import {OfferType} from '../types/offer-type';

type InitialState = {
  city: string;
  offers: OfferType[];
  sorting: string;
  error: string | null;
  isLoading: boolean;
  noData: boolean;
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: [],
  sorting: DEFAULT_SORTING,
  error: null,
  isLoading: false,
  noData: false
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setNoDataStatus, (state, action) => {
      state.noData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
