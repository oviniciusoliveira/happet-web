import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AcceptedPetHomes from "./../pages/AcceptedPetHomes";
import PendingPetHomes from "./../pages/PendingPetHomes";
import EditPetHome from "./../pages/EditPetHome";
import DeletePetHome from "../pages/DeletePetHome";

import { RoutesProps } from "./index";

const AuthRoutes: React.FC<RoutesProps> = ({ toggleTheme }: RoutesProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/signin" to="/" />
        <Redirect exact from="/" to="/accepted-pet-homes" />
        <Route path="/accepted-pet-homes" component={AcceptedPetHomes} />
        <Route path="/pending-pet-homes" component={PendingPetHomes} />
        <Route path="/edit/:id" component={EditPetHome} />
        <Route path="/delete/:id" component={DeletePetHome} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
