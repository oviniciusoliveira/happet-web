import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePetHome from "../pages/CreatePetHome";
import Landing from "../pages/Landing";
import PetHome from "../pages/PetHome";
import PetHomeMap from "../pages/PetHomeMap";
import SignIn from "../pages/SignIn";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={PetHomeMap} />
        <Route path="/petHomes/create" component={CreatePetHome} />
        <Route path="/petHomes/:id" component={PetHome} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
