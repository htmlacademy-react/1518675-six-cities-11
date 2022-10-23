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

export {AuthorizationStatus, Url};
