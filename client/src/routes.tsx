import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import RepoList from './pages/ReposList'

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Route component={Login} path="/" exact /> */}
      <Route component={RepoList} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;