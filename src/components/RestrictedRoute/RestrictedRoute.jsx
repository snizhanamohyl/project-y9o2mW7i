import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectToken } from 'redux/selectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? <Navigate to='/' /> : <Component />;
  // return <Component />;
}
