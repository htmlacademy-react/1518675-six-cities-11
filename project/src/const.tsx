import {OfferType} from './types/offer-type';

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
  Comments = 'COMMENTS',
  Favorites = 'FAVORITES',
  NearbyOffers = 'NEARBY_OFFERS',
  Notifications = 'NOTIFICATIONS'
}

const enum APIRoute {
  Hotels = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = 'comments'
}

const enum Url {
  Main = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id',
}

const enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed'
}

const OfferKind = {
  PrivateRoom:'private room',
  Apartment: 'apartment'
} as const;

const CardType = {
  Main: 'main',
  Favorites: 'favorites'
} as const;

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const SORTING_METHODS = {
  popular: {
    name: 'Popular',
    method: (offers: OfferType[]) => offers
  },
  priceAsc: {
    name: 'Price: low to high',
    method: (offers: OfferType[]) => offers.sort((a: OfferType, b: OfferType) => a.price - b.price)
  },
  priceDesc: {
    name: 'Price: high to low',
    method: (offers: OfferType[]) => offers.sort((a: OfferType, b: OfferType) => b.price - a.price)
  },
  topRated: {
    name: 'Top rated first',
    method: (offers: OfferType[]) => offers.sort((a: OfferType, b: OfferType) => b.rating - a.rating)
  }
};

const sortOffers = (offers: OfferType[], activeSorting: string) => {
  const sortingMethod = SORTING_METHODS[activeSorting as keyof typeof SORTING_METHODS].method;
  return sortingMethod(offers);
};

const MAX_NEARBY_OBJECTS = 4;

const MAX_OFFER_IMAGES = 6;

const SORTING_VALUES = Object.keys(SORTING_METHODS);

const DEFAULT_SORTING = SORTING_VALUES[0];

const TIMEOUT_SHOW_ERROR = 2000;

const enum ReviewLength {
  Min = 50,
  Max = 300
}

// const MIN_REVIEW_LENGTH = 50;
//
// const MAX_REVIEW_LENGTH = 300;

export {
  AuthorizationStatus,
  Url,
  APIRoute,
  OfferKind,
  CardType,
  MAX_NEARBY_OBJECTS,
  MAX_OFFER_IMAGES,
  CITIES,
  SORTING_METHODS,
  sortOffers,
  DEFAULT_SORTING,
  TIMEOUT_SHOW_ERROR,
  NameSpace,
  FetchStatus,
  ReviewLength
};
