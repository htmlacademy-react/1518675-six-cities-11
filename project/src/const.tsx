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

const enum MarkerIcon {
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
}

const enum DefaultLocation {
  Latitude = 52.3909553943508,
  Longitude = 4.929309666406198
}

export {AuthorizationStatus, Url, OfferKind, CardType, MarkerIcon, DefaultLocation};
