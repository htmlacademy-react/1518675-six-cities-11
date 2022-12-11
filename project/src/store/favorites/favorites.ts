import {createSlice} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {fetchFavoritesAction} from '../api-actions';
import {OfferType} from '../../types/offer-type';

type favoritesType = {
  favorites: OfferType[] | null;
  favoritesStatus: FetchStatus;
}

const initialState: favoritesType = {
  favorites: null,
  favoritesStatus: FetchStatus.Idle
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesStatus = FetchStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favorites = null;
        state.favoritesStatus = FetchStatus.Failed;
      });
  }
});
