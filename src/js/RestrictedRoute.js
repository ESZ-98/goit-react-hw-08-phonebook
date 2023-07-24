import { useAuthRoute } from 'hook/useAuthRoute';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/goit-react-hw-08-phonebook',
}) => {
  const { isLoggedIn } = useAuthRoute();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
