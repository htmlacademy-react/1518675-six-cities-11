import {FetchStatus, NameSpace} from '../../const';
import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {OfferType} from '../../types/offer-type';

export const getFavorites = (state: State): OfferType[] | null => state[NameSpace.Favorites].favorites;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Favorites].favoritesStatus;

export const getFavoritesStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));

