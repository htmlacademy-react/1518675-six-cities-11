import {State} from '../../types/state';
import {OfferType} from '../../types/offer-type';
import {FetchStatus, NameSpace} from '../../const';
import {createSelector} from '@reduxjs/toolkit';

export const getNearbyOffers = (state: State): OfferType[] => state[NameSpace.NearbyOffers].nearbyOffers;
export const getStatus = (state: State): FetchStatus => state[NameSpace.NearbyOffers].nearbyOffersStatus;

export const getNearbyOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
