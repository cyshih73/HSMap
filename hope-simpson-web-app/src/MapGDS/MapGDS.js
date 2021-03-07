import React from 'react';
import './MapGDS.css';

const GDS_REPORT_PATHS = [
  // Overview
  "https://datastudio.google.com/embed/reporting/30c1e5a8-6cbf-43ba-9796-b4bb042082f6/page/TxgjB",
  // Four Zones Concept
  "https://datastudio.google.com/embed/reporting/30c1e5a8-6cbf-43ba-9796-b4bb042082f6/page/cm8pB",
  // Province/State Slice
  "https://datastudio.google.com/embed/reporting/30c1e5a8-6cbf-43ba-9796-b4bb042082f6/page/dF9pB"
];
const GDS_REPORT_TITLES = [
  "Overview", "Four Zones Concept", "Province/State Slice"
];

class MapGDS extends React.Component{
  constructor(props) {
    super(props);
    this.state = { view: 0 };
  }

  handleChangeView(viewId, event) { 
    event.preventDefault();
    this.setState({ ...this.state, view: viewId});
  }

  render() {
    return (
      <div className="map-container container align-items-center">
        <ul className="map-gds-navbar nav nav-tabs justify-content">
          <li className="nav-item disabled">
            <a className="nav-link disabled" href="/#">COVID-19 Map <span style={{fontSize: "xx-small"}}>Powered by Google Data Studio</span></a>
          </li>
          {
            GDS_REPORT_TITLES.map((title, idx) => {
              return <li className="nav-item" key={ `Tab_${idx}` }>
                <a className={ "nav-link " + (this.state.view === idx ? "active" : "") } 
                  onClick={ (e) => this.handleChangeView(idx, e) } href="/#">{title}</a>
              </li>
            })
          }
        </ul>
        { 
          GDS_REPORT_PATHS.map((report, idx) => {
            return <iframe width="1110px" height="910px" frameBorder="0" title="COVID-19 Map with GDS" 
            key={ `Iframe_${idx}` } src={ report }
            allowFullScreen style={this.state.view === idx ? {position: "absolute"} : { position: "absolute", top: "-5000px" }}/>
          })
        }
      </div>
    );
  }
}


export default MapGDS;
