import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import Home from "../components/home";
import About from "../components/about";

import { localRoute } from "./localRoutes";

const localRoutes = () => {
  return (
    <React.Fragment>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={`${localRoute.home}`} component={Home} />
            <Route exact path={`${localRoute.about}`} component={About} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default localRoutes;
