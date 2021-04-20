import React, {Component} from 'react';
import './Modeling.css';
import { Switch, NavLink, Route, Redirect, useRouteMatch } from "react-router-dom";
import ModelTriage from "./Models/ModelTriage";
import FourierBasedAnalysis from "./Models/FourierBasedAnalysis";
import CompartmentalNetworkModel from "./Models/CompartmentalNetworkModel";
import InteractiveModel from "./Models/InteractiveModel";

class Modeling extends Component{
	tabs=[
		{
			name: "Fourier-Based Analysis",
			location: <FourierBasedAnalysis/>
		},
		{
			name: "Compartmental Network Model",
			location: <CompartmentalNetworkModel/>
		},
		{
			name: "Interactive Model",
			location: <InteractiveModel/>
		}
	]
	constructor(props) {
		super(props);
		this.state = {...this.state,currentTab: 0 };
	}
	pressTab=(index)=>{
		this.setState({ ...this.state, currentTab: index});
		console.log(index);
	}
	render() {
		return(

			<div className={"bodyMarginTop"}>
				<div className={"customTab"}>
					{
						this.tabs.map((eachTab,index)=>{
							return (
								<div className={(index==this.state.currentTab)?"tabPressed":"tabUnPressed"} onClick={(e)=>{this.pressTab(index)}}><span>{eachTab.name}</span></div>
							)
						})
					}
				</div>
				<div className={"topLine"}>
					<hr/>
				</div>
				<div>
					{
						this.tabs[this.state.currentTab].location
					}
				</div>
			</div>
		)
		/*
		<div className="modeling-container container bodyMarginTop">
			<div className="modeling-navbar">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink exact className="nav-link" to={`${url}/fourierbasedanalysis`}>Fourier-Based Analysis</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact className="nav-link" to={`${url}/compartmentalnetworkmodel`}>Compartmental Network Model</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact className="nav-link" to={`${url}/interactivemodel`}>Interactive Model</NavLink>					</li>
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
		</div>*/
	}
}

export default Modeling;
