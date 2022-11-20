import {OfferType} from './types/offer-type';

const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown'
} as const;

const Url = {
  Main: '/',
  Favorites: '/favorites',
  Login: '/login',
  Offer: '/offer/:id',
} as const;

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
  Popular: {
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

const MAX_NEARBY_OBJECTS = 3;

const MAX_OFFER_IMAGES = 6;

const DEFAULT_SORTING = 'Popular';

export {
  AuthorizationStatus,
  Url,
  OfferKind,
  CardType,
  MAX_NEARBY_OBJECTS,
  MAX_OFFER_IMAGES,
  CITIES,
  SORTING_METHODS,
  sortOffers,
  DEFAULT_SORTING
};
