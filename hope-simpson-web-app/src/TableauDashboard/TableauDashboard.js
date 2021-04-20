import React, { useRef, useEffect } from 'react';
import './TableauDashboard.css';

function TableauDashboard({ url, options }) {

  const ref = useRef(null);

  // Initialize Tableau dashboard object
  useEffect(() => initViz());

  const initViz = () => {
    return new window.tableau.Viz(ref.current, url, options);
  };

  return (
    <div>
      <div ref={ ref } id="tableau-dashboard" />
    </div>
  );
}

export default TableauDashboard;
