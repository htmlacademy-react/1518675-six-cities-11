import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, DEFAULT_SORTING, FetchStatus, NameSpace} from '../../const';
import {changeFavoriteAction, fetchOffersAction} from '../api-actions';
import {OfferType} from '../../types/offer-type';

type Offers = {
  offers: OfferType[];
  offersStatus: FetchStatus;
  city: string;
  sorting: string;
  noData: boolean;
};

const initialState: Offers = {
  offers: [],
  offersStatus: FetchStatus.Idle,
  city: CITIES[0],
  sorting: DEFAULT_SORTING,
  noData: false
};

type SortingType = {
  sorting: string;
};

type CityType = {
  city: string;
}

export const offers = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeSorting: (state, action: PayloadAction<{sorting: string}>) => {
      const {sorting}: SortingType = action.payload;
      state.sorting = sorting;
    },
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      const {city}: CityType = action.payload;
      state.city = city;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
        state.noData = true;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, action) => {
        const offerIndex = state.offers.findIndex((item) => item.id === action.payload.id);

        if (offerIndex !== -1) {
          state.offers[offerIndex].isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export const {changeSorting, changeCity} = offers.actions;
