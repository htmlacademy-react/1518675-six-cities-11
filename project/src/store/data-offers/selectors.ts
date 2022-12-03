import {OfferType} from '../../types/offer-type';
import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;
export const changeSorting = (state: State): string => state[NameSpace.Data].sorting;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].noData;
// export const changeCity = (state: State): string => state[NameSpace.Data].city;
