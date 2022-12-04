import {createSelector} from '@reduxjs/toolkit';
import {OfferType} from '../../types/offer-type';
import {State} from '../../types/state';
import {FetchStatus, NameSpace} from '../../const';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Data].offers;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Data].offersStatus;
export const getActiveSorting = (state: State): string => state[NameSpace.Data].sorting;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].noData;
export const getActiveCity = (state: State): string => state[NameSpace.Data].city;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
