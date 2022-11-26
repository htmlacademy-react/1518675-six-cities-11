import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {OfferType} from '../types/offer-type';

export const changeCity = createAction<{ city: string }>('offer/changeCity');
export const changeSorting = createAction<{ sorting: string }>('main/changeSorting');
export const loadOffers = createAction<OfferType[]>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('data/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
