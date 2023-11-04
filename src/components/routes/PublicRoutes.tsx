import {useSelector} from 'react-redux';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {RootState} from '../../stores/store';
function PublicRoutes() {
  const {token, loading} = useSelector((state: RootState) => state.auth);
  console.log(token);
  const location = useLocation();

  return !loading && token ? (
    <Navigate to={'/user'} state={{from: location}} replace />
  ) : (
    <Outlet />
  );
}

export default PublicRoutes;
