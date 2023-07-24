import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsChecking,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuthRoute = () => {
  const user = useSelector(selectUser);
  const isChecking = useSelector(selectIsChecking);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    user,
    isChecking,
    isLoggedIn,
    isRefreshing,
  };
};
