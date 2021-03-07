import React from 'react';
import './MapTableau.css';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import DashboardTriage from "./DashboardTriage"
import dashboards from "./DashboardDatabase";

function MapTableau () {
  let { path, url } = useRouteMatch();

  return (
    <div className="map-container container align-items-center">
      <div className="map-tableau-navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item disabled">
            <a className="nav-link disabled" href="/#">COVID-19 Map <span style={{fontSize: "xx-small"}}>Powered by Tableau</span></a>
          </li>
          {
            dashboards && dashboards.map((dashboard, index) =>
              <li className="nav-item" key={ index }>
                <NavLink exact className="nav-link" to={ url + "/" + dashboard.url }>{ dashboard.name }</NavLink>
              </li>)
          }
        </ul>
      </div>
      <Switch>
        <Route exact path={path}>
          <Redirect to={ url + "/" + dashboards[0].url } />
        </Route>
        <Route path={`${path}/:sectionId`}>
          <DashboardTriage />
        </Route>
      </Switch>
    </div>
  );
}

export default MapTableau;
