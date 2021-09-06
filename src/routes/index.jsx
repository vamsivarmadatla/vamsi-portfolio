import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";

import { localRoute } from "./localRoutes";
import { Fragment } from "react";

const localRoutes = () => {
  return (
    <React.Fragment>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={`${localRoute.home}`} component={Home} />
            <Route exact path={`${localRoute.about}`} component={Contact} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default localRoutes;
