import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import MapTableau from "../MapTableau/MapTableau";
import MapGDS from "../MapGDS/MapGDS";
import Modeling from "../Modeling/Modeling";
import Team from "../Team/Team";

function SiteRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/map/gds">
          <MapGDS />
        </Route>
        <Route path="/map/tableau">
          <MapTableau />
        </Route>
        <Route path="/modeling">
          <Modeling />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default SiteRouter;
