import {useAuth} from "./../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { signed } = useAuth();
  return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
