import { useAuth } from "./../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export interface RoutesProps {
  toggleTheme(): void;
}

const Routes = ({ toggleTheme }: RoutesProps) => {
  const { signed } = useAuth();
  return signed ? (
    <AuthRoutes toggleTheme={toggleTheme} />
  ) : (
    <AppRoutes toggleTheme={toggleTheme} />
  );
};

export default Routes;
