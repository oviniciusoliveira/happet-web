import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePetHome from "../pages/CreatePetHome";
import ForgotPassword from "../pages/ForgotPassword";
import Landing from "../pages/Landing";
import PasswordReset from "../pages/PasswordReset";
import PetHome from "../pages/PetHome";
import PetHomeMap from "../pages/PetHomeMap";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SuccessRegistration from "../pages/SuccessRegistration";

import { RoutesProps } from "./index";

const AppRoutes = ({ toggleTheme }: RoutesProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Landing toggleTheme={toggleTheme} />}
        />
        <Route path="/app" component={PetHomeMap} />
        <Route path="/petHomes/create" component={CreatePetHome} />
        <Route path="/petHomes/:id" component={PetHome} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/password-reset" component={PasswordReset} />
        <Route exact path="/success-pet-home" component={SuccessRegistration} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
