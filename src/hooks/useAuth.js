import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectToken,
} from 'redux/Auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    error: useSelector(selectError),
    token: useSelector(selectToken),
  };
};
