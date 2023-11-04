import {useSelector} from 'react-redux';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {RootState} from '../../stores/store';
function PrivateRoutes() {
  const {token, loading} = useSelector((state: RootState) => state.auth);
  console.log(token);
  const location = useLocation();

  return !loading && token ? (
    <Outlet />
  ) : (
    <Navigate to={'/signin'} state={{from: location}} replace />
  );
}

export default PrivateRoutes;
