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

export {AuthorizationStatus, Url, OfferKind, CardType};
