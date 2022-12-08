import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {authorization} from './authorization/authorization';
import {offers} from './offers/offers';
import {singleOffer} from './single-offer/single-offer';
import {comments} from './comments/comments';
import {nearbyOffers} from './nearby-offers/nearby-offers';
import {notifications} from './notifications/notifications';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offers.reducer,
  [NameSpace.User]: authorization.reducer,
  [NameSpace.Offer]: singleOffer.reducer,
  [NameSpace.Comments]: comments.reducer,
  [NameSpace.NearbyOffers]: nearbyOffers.reducer,
  [NameSpace.Notifications]: notifications.reducer
});
