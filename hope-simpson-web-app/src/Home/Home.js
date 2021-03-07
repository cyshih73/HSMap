import React from 'react';
import './Home.css';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/hs-world-map-all/Dashboard-WorldMapAll';
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };

function Home() {
  return (
    <div className="home-container container">
      <h1 className="text-center">Exploring COVID-19 Cases Around the World</h1>
      <h2 className="text-center">Modern Tools Applied to a 90’s Concept</h2>
      <hr/>
      <p className="lead">A very cordial welcome to the Hope-Simpson project started by a group of students from the fall 2020 class of COMP/ELEC 425/554! We created a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. We analyzed COVID-19 data on our platform based on Robert Edgar Hope-Simpson's perspective and his study of the spread of the influenza virus.</p>
      <p className="lead">On our home page, you can begin to explore COVID-19 cases around the world. The histogram displays confirmed cases in weekly increments based on the locations you selected.</p>
      <div style={{ height: 1050 }}>
        <TableauDashboard
          url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
          options={ TABLEAU_OPTIONS }
        />
      </div>
      <p className="lead">Let us take you through a journey of ways to look at the current worldwide pandemic through the lens of Hope-Simpson. Here is what you can find on our other pages:</p>
      <ul>
        <li className="lead"><strong>About:</strong> Information on the background inspiration, which is the life work of Robert Edgar Hope-Simpson (1908-2003), a general practitioner who studied influenza cases around the world for sixty years. Also, an explanation of the Hope-Simpson concept and about our COVID-19 data.</li>
        <li className="lead"><strong>Tableau Map:</strong> Using Tableau, you can take a Hope-Simpson inspired look at COVID-19 through a sample of four latitude zones around the world. We compared and contrasted different regions and showed a north-to-south longitudinal slice of the Americas.</li>
        <li className="lead"><strong>GDS Map:</strong> Using Google Data Studio, you can dive into a detailed exploration of the data by date, country, latitude, and longitude. We can see another view of the four-zones concept and the longitudinal slice of the Americas.</li>
        <li className="lead"><strong>Modeling:</strong> See early work of a compartmental network model of the virus spread and a Fourier-based analysis of the reported cases across the world.</li>
      </ul>
      <p className="lead">Finally, our site is constantly redesigned so it might be a bit unresponsive from time to time.  But one of our great design features is that you can download any of the data yourself to continue your own exploration.</p>
      <p className="lead">Stay safe!</p>
    </div>
  );
}

export default Home;
