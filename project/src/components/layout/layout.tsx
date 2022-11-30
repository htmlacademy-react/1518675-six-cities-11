import {Outlet} from 'react-router-dom';
import Header from '../header/header';
import {useAppSelector} from '../../hooks';

function Layout() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <>
      <Header authorizationStatus={authorizationStatus}/>

      <Outlet/>
    </>
  );
}

export default Layout;
