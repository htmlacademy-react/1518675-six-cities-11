import {Outlet} from 'react-router-dom';
import Header from '../header/header';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function Layout() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <>
      <Header authorizationStatus={authorizationStatus}/>
      <Outlet/>
    </>
  );
}

export default Layout;
