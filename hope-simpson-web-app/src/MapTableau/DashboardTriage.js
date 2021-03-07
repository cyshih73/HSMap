import React from 'react';
import { useParams } from 'react-router-dom';
import TableauDashboard from "../TableauDashboard/TableauDashboard";
import dashboards from "./DashboardDatabase";

// Tableau dashboard settings
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };

function ModelTriage() {
  let { sectionId } = useParams();
  return (
    <div>
      {
        dashboards && dashboards.map((dashboard, index) => {
          return dashboard.url === sectionId
            ? <TableauDashboard
              url={ dashboard.tableauUrl }
              options={ TABLEAU_OPTIONS }
              key = { index }/>
            : null;
        })
      }
    </div>
  )
}

export default ModelTriage;
