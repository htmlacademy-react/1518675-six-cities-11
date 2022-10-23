import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, Url} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Url.Login} />
  );
}

export default PrivateRoute;
