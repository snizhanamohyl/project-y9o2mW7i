// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsRefreshing, selectToken } from 'redux/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  // const isLogggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isRefreshing = useSelector(state => state.auth.isRefreshing);

  // const shouldRedirect = !isLogggedIn && !isRefreshing;

  // return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;

  return <Component />

}
