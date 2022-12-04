import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_SORTING, NameSpace} from '../../const';
import {DataOffers} from '../../types/state';
import {fetchOffersAction} from '../api-actions';

const initialState: DataOffers = {
  offers: [],
  isLoading: false,
  city: 'Amsterdam',
  sorting: DEFAULT_SORTING,
  noData: false
};

export const dataOffers = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeSorting: (state, action) => {
      const {sorting} = action.payload;
      state.sorting = sorting;
    },
    changeCity: (state, action) => {
      const {city} = action.payload;
      state.city = city;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
        state.noData = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.isLoading = false;
        state.noData = true;
      });
  }
});

export const {changeSorting, changeCity} = dataOffers.actions;
