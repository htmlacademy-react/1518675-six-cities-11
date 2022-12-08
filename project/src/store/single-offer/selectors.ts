import {State} from '../../types/state';
import {OfferType} from '../../types/offer-type';
import {FetchStatus, NameSpace} from '../../const';
import {createSelector} from '@reduxjs/toolkit';

export const getOffer = (state: State): OfferType | null => state[NameSpace.Offer].offer;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Offer].offerStatus;

export const getSingleOfferStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
