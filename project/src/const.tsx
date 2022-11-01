const enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}

const enum Url {
  Main = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id'
}

const enum OfferKind {
  PrivateRoom = 'private room',
  Apartment = 'apartment'
}

const enum CardType {
  Main = 'main',
  Favorites = 'favorites'
}

export {AuthorizationStatus, Url, OfferKind, CardType};
