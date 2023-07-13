import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectToken } from 'redux/selectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;

  // return <Component />;
}
