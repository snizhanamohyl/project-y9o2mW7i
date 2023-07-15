import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUser,
  getIsRefreshing,
  getServerError,
  getToken
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getIsRefreshing),
    user: useSelector(getUser),
    error: useSelector(getServerError),
    token: useSelector(getToken),
  };
};
