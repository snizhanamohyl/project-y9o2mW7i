import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectToken } from 'redux/selectors';
import { getIsLoggedIn } from 'redux/auth/selectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;

  // return <Component />;

}
