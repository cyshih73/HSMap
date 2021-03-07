import React, { Component } from 'react';
import * as d3 from 'd3';

const SEIR_IMAGE_PATH = '/assets/seir-model.png';

//function InteractiveModel() {
class InteractiveModel extends Component {
	constructor(props) {
		super(props);
		this.myChart = React.createRef();
		this.state = {
			years: 4,
			beta: 0.05,
			alpha: 0.03,
			ro: 0.05,
			etha: 0.03
		};
	}

	handleChangeYears = event => {
		this.setState({ years: event.target.value });
	};

	handleChangeBeta = event => {
		this.setState({ beta: event.target.value });
	};

	handleChangeAlpha = event => {
		this.setState({ alpha: event.target.value });
	};

	handleChangeRo = event => {
		this.setState({ ro: event.target.value });
	};

	handleChangeEtha = event => {
		this.setState({ etha: event.target.value });
	};

	componentDidMount() {
		this.displayChart();
	}

	componentDidUpdate() {
		this.displayChart();
	}

	generateAlpha(base_alpha, seasonal_factor, total_time) {
		let alpha = [];
		for (let j=0; j < total_time - 1; j++) {
			let val = base_alpha*(1 + seasonal_factor*Math.sin(j/365*2*Math.PI + Math.PI));
			alpha.push(val);
		}
		//console.log(alpha);
		return alpha;
	}

	generateData(param, initialValues) {
		const total_time = this.state.years*365;
		let current_date = new Date('2020-02-02');

		const seasonal_factor = 0.75;
		const alpha = this.generateAlpha(param.alpha, seasonal_factor, total_time);

		let s = initialValues.S;
		let s_next;
		let e = initialValues.E;
		let e_next;
		let i = initialValues.I;
		let i_next;
		let r = initialValues.R;
		let r_next;

		var data = [
			{
				timestamp: new Date(current_date),
				susceptible: s,
				exposed: e,
				infected: i,
				recovered: r
			}
		];

		for (let j=0; j < total_time - 1; j++) {
			s_next = s - param.beta*i*s + param.etha*r;
			e_next = e + param.beta*i*s - alpha[j]*e;
			i_next = i + alpha[j]*e - param.ro*i;
			r_next = r + param.ro*i - param.etha*r;
			s = s_next;
			e = e_next;
			i = i_next;
			r = r_next;
			current_date.setDate(current_date.getDate() + 1);


			let new_data = {
				timestamp: new Date(current_date),
				susceptible: s_next,
				exposed: e_next,
				infected: i_next,
				recovered: r_next
			};

			data.push(new_data);
		}
		return data;
	}

	plotLine(data) {
		//First, delete any previous svg elements
		d3.select("svg").remove();

		//Define general dimension parameters
		var outerWidth = 800;
		var outerHeight = 450;
		var margin = { left: 70, top: 25, right: 25, bottom: 60 };
		var innerWidth  = outerWidth  - margin.left - margin.right;
		var innerHeight = outerHeight - margin.top  - margin.bottom;
		var xColumn = "timestamp";
		var yColumn = "infected";
		// var xAxisLabelText = "Time";
		// var xAxisLabelOffset = 48;
		// var yAxisLabelText = "Temperature °C";
		// var yAxisLabelOffset = 40;

		//Append svg element to the page
		const svg = d3.select(this.myChart.current).append("svg")
			.attr("width",  outerWidth)
			.attr("height", outerHeight);
		var g = svg.append("g")
			.attr("transform",
				"translate(" + margin.left + "," + margin.top + ")");

		var xAxisG = g.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0, " + innerHeight + ")");
		/*var xAxisLabel = xAxisG.append("text")
        .style("text-anchor", "middle")
              .attr("transform",
        "translate(" + (innerWidth / 2) + "," + xAxisLabelOffset + ")")
              .attr("class", "label")
              .text(xAxisLabelText);*/
		var yAxisG = g.append("g")
			.attr("class", "y axis");
		/*var yAxisLabel = yAxisG.append("text")
              .style("text-anchor", "middle")
              .attr("transform",
        "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
              .attr("class", "label")
              .text(yAxisLabelText);*/
		var path = g.append("path")
			.attr("class", "chart-line");

		//Prepare function to scale input to pixel values
		var xScale = d3.scaleTime().range([0, innerWidth]);
		var yScale = d3.scaleLinear().range([innerHeight, 0]);
		var minDate = d3.min(data, function (d){ return d[xColumn]; });
		minDate.setDate(minDate.getDate() - 1);
		var maxDate = d3.max(data, function (d){ return d[xColumn]; });
		maxDate.setDate(maxDate.getDate()); //fix-me: set to Jan 1st of next year
		//console.log([minDate, maxDate]);
		xScale.domain( [minDate, maxDate]);
		yScale.domain( [0, d3.max(data, function (d){ return d[yColumn]; }) * 1.15]);

		//Draw Line
		const line = d3.line()
			.x(function(d) { return xScale(d[xColumn]); })
			.y(function(d) { return yScale(d[yColumn]); });
		path.attr("d", line(data));

		//Draw axis
		const xaxis = d3.axisBottom()
			.ticks(d3.timeYear.every(1))
			//.tickFormat(d3.timeFormat('%b %y'))
			.scale(xScale);
		const yaxis = d3.axisLeft()
			//.ticks(data.length)
			.scale(yScale);
		xAxisG.call(xaxis);
		yAxisG.call(yaxis);
	}

	displayChart() {
		var parameters = {
			beta: this.state.beta,
			alpha: this.state.alpha,
			ro: this.state.ro,
			etha: this.state.etha
		};

		const initialValues = {
			S: 0.89,
			E: 0.10,
			I: 0.01,
			R: 0
		};

		const data = this.generateData(parameters, initialValues);
		this.plotLine(data);
	}

	render() {
		return (
			<div>
				<div>
					<h3>Ratio of Infected People Over Time</h3>
				</div>

				<div ref={this.myChart}/>

				<div id="parameters-outer-box">
					<h4>Control the model parameters below:</h4>

					<div id="parameters-control-box">
						<React.Fragment>
							<form>
								<label htmlFor="years">Number of years:</label>
								<input
									type="number"
									name="years"
									className="form-input-number"
									value={this.state.years}
									onChange={this.handleChangeYears}
								/>

								<p/>
								<input
									type="range"
									id="beta"
									name="beta"
									className="form-input-slider"
									min="0"
									max="0.2"
									step="0.00025"
									value={this.state.beta}
									onChange={this.handleChangeBeta}
								/>
								<label htmlFor="beta">Beta: {this.state.beta}</label>

								<input
									type="range"
									id="alpha"
									name="alpha"
									className="form-input-slider"
									min="0"
									max="0.1"
									step="0.001"
									value={this.state.alpha}
									onChange={this.handleChangeAlpha}
								/>
								<label htmlFor="alpha">Alpha: {this.state.alpha}</label>

								<input
									type="range"
									id="ro"
									name="ro"
									className="form-input-slider"
									min="0"
									max="0.1"
									step="0.001"
									value={this.state.ro}
									onChange={this.handleChangeRo}
								/>
								<label htmlFor="ro">Rho: {this.state.ro}</label>

								<input
									type="range"
									id="etha"
									name="etha"
									className="form-input-slider"
									min="0"
									max="0.1"
									step="0.001"
									value={this.state.etha}
									onChange={this.handleChangeEtha}
								/>
								<label htmlFor="etha">Eta: {this.state.etha}</label>

							</form>
						</React.Fragment>
					</div>
					<div id="parameters-control-image">
						<img width="500px" src={ SEIR_IMAGE_PATH } alt="" className="img-SEIR-model"/>
					</div>
				</div>
			</div>
		);
	}
}

export default InteractiveModel;
