import React from 'react';
import './Modeling.css';
import { Switch, NavLink, Route, Redirect, useRouteMatch } from "react-router-dom";
import ModelTriage from "./Models/ModelTriage";

function Modeling () {
	let { path, url } = useRouteMatch();

	return (
		<div className="modeling-container container">
			<div className="modeling-navbar">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink exact className="nav-link" to={`${url}/fourierbasedanalysis`}>Fourier-Based Analysis</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact className="nav-link" to={`${url}/compartmentalnetworkmodel`}>Compartmental Network Model</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact className="nav-link" to={`${url}/interactivemodel`}>Interactive Model</NavLink>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path={path}>
					<Redirect to={`${url}/fourierbasedanalysis`} />
				</Route>
				<Route path={`${path}/:modelId`}>
					<ModelTriage />
				</Route>
			</Switch>
		</div>
	);
}

export default Modeling;
