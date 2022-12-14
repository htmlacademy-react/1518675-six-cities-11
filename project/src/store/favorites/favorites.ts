import {createSlice} from '@reduxjs/toolkit';
import {FetchStatus, NameSpace} from '../../const';
import {changeFavoriteAction, fetchFavoritesAction} from '../api-actions';
import {OfferType} from '../../types/offer-type';

type favoritesType = {
  favorites: OfferType[];
  favoritesStatus: FetchStatus;
}

const initialState: favoritesType = {
  favorites: [],
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
        state.favoritesStatus = FetchStatus.Failed;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, action) => {
        const {isFavorite} = action.payload;

        if (isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
        }
      });
  }
});
