import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import RepoList from './pages/ReposList'
import CreateAcc from './pages/CreateAcc';
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact/>
      <Route component={CreateAcc} path="/newuser"/>
      <Route component={CreateAcc} path="/private/info"/>
    </BrowserRouter>
  );
};

export default Routes;