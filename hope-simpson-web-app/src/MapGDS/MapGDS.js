import React from 'react';
import './MapGDS.css';

const GDS_REPORT_PATHS = [
  // Overview
  "https://datastudio.google.com/embed/reporting/5118bc09-674b-4204-a7a4-087c81deb00a/page/TxgjB",
  // Four Zones Concept
  "https://datastudio.google.com/embed/reporting/5118bc09-674b-4204-a7a4-087c81deb00a/page/cm8pB",
  // Province/State S
  // lice
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

  pressTab=(index)=>{
    this.setState({ ...this.state, view: index});
  }
  render() {
    return (
      <div className="bodyMarginTop">
        <div className={"customTab"}>
          {
            GDS_REPORT_TITLES.map((title, idx) => {
              return <div className={(idx==this.state.view)?"tabPressed":"tabUnPressed"} onClick={(e)=>{this.pressTab(idx)}}><span>{title}</span></div>
            })
          }
        </div>
        <div className={"iframeTab"}>
          <iframe scrolling="yes" frameBorder="0" title="COVID-19 Map with GDS"
                  src={ GDS_REPORT_PATHS[this.state.view] }
                  allowFullScreen />

        </div>
      </div>
    );
  }
}


export default MapGDS;
