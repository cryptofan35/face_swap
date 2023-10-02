import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "Pages/HomePage";
import Header from "Layout/Header";
import { useStyles } from "./style";

const BaseRouter = () => {
  const classes = useStyles();
  const switchRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    );
  };
  return (
    <Router>
      <div className={classes.base}>
        <Header />
        <div>{switchRoutes()}</div>
      </div>
    </Router>
  );
};

export default BaseRouter;
