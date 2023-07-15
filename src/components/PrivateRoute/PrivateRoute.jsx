import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsRefreshing, selectToken } from 'redux/selectors';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/welcome',
}) {
  const isLogggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  const shouldRedirect = !isLogggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;

  // return <Component />;
}
