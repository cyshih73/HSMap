import React, {useState} from 'react';
import './MapTableau.css';
import dashboards from "./DashboardDatabase";
import TableauDashboard from "../TableauDashboard/TableauDashboard";
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };
function MapTableau () {
    let [currentView,changeView]=useState(0);

    function pressTab(index){
        changeView(index);
    }

    const showClass={
        display:'initial'
    }
    const hideClass={
        display:'none'
    }
  return (
      <div className={"bodyMarginTop"}>
          <div className={"customTab"}>
              {
                  dashboards.map((data, idx) => {
                      return <div className={(idx==currentView)?"tabPressed":"tabUnPressed"} onClick={()=>{pressTab(idx)}}><span>{data.name}</span></div>
                  })
              }
          </div>
          <div className={"dashboardTab"}>
              {
                  dashboards && dashboards.map((dashboard, index) => {
                      return index === currentView
                          ? <TableauDashboard
                              url={ dashboard.tableauUrl }
                              options={ TABLEAU_OPTIONS }
                              key = { index }/>
                          : <span></span>;
                  })
              }
          </div>
      </div>
  );
}

export default MapTableau;
