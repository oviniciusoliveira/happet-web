import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AcceptedPetHomes from "./../pages/AcceptedPetHomes";
import PendingPetHomes from "./../pages/PendingPetHomes";
import EditPetHome from './../pages/EditPetHome';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Redirect from="/signin" to="/" />
          <Redirect exact from="/" to="/accepted-pet-homes" />
          <Route path="/accepted-pet-homes" component={AcceptedPetHomes} />
          <Route path="/pending-pet-homes" component={PendingPetHomes} />
          <Route path="/edit/:id" component={EditPetHome} />
        </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
