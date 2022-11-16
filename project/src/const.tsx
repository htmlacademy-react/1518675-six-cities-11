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

const MAX_NEARBY_OBJECTS = 3;

const MAX_OFFER_IMAGES = 6;

export {AuthorizationStatus, Url, OfferKind, CardType, MAX_NEARBY_OBJECTS, MAX_OFFER_IMAGES, CITIES};
