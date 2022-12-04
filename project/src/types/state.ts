import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {OfferType} from './offer-type';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataOffers = {
  offers: OfferType[];
  isLoading: boolean;
  city: string;
  sorting: string;
  noData: boolean;
};
