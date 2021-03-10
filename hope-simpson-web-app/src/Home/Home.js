import React from 'react';
import './Home.css';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/hs-world-map-all/Dashboard-WorldMapAll';
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };


function Home() {

  return (
    <div className={"home-container bodyMarginTop"}>
        <div className={"homeTitles"}>
          <div className="text-center mainTitle">Exploring COVID-19 Cases Around the World</div>
          <div className="text-center subTitle">Modern Tools Applied to a 90’s Concept</div>
        </div>
        <div id={"section1"}>
            <div className={"title"}>Introduction</div>
            <div className="lead">A very cordial welcome to the Hope-Simpson project started by a group of students from the fall 2020 class of COMP/ELEC 425/554! We created a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. We analyzed COVID-19 data on our platform based on Robert Edgar Hope-Simpson's perspective and his study of the spread of the influenza virus.</div>
            <br/>
            <div className="lead">On our home page, you can begin to explore COVID-19 cases around the world. The histogram displays confirmed cases in weekly increments based on the locations you selected.</div>
        </div>
      <div className={"homeTableau"}>
          <div className={"caseDetails"}>
              <div>
                  <div>Global Confirmed</div>
                  <div>117,556,326</div>
              </div>
              <div>
                  <div>Global Deaths</div>
                  <div>2,610,135</div>
              </div>
              <div>
                  <div>U.S. Confirmed</div>
                  <div>29,094,540</div>
              </div>
              <div>
                  <div>U.S. Deaths</div>
                  <div>527,643</div>
              </div>
          </div>
          <div className={"tableauGraph"}>
        <TableauDashboard
          url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
          options={ TABLEAU_OPTIONS }
        />
          </div>
      </div>
        <div id={"section2"}>
            <div>
                <p className="lead">Let us take you through a journey of ways to look at the current worldwide pandemic through the lens of Hope-Simpson. Here is what you can find on our other pages:</p>
                <div className={"homeCards"}>
                    <div className={"cards"}>
                        <img src={'/assets/about.png'} style={{backgroundColor: "#143642"}}/>
                        <div className={"cardTitle"}>About</div>
                        <div className={"cardContent"}>Information on the background inspiration, which is the life work of Robert Edgar Hope-Simpson (1908-2003), a general practitioner who studied influenza cases around the world for sixty years. Also, an explanation of the Hope-Simpson concept and about our COVID-19 data.</div>
                    </div>
                    <div className={"cards"}>
                        <img src={'/assets/tableau.png'} style={{backgroundColor: "#0F8B8D"}}/>
                        <div className={"cardTitle"}>Tableau Map</div>
                        <div className={"cardContent"}>Using Tableau, you can take a Hope-Simpson inspired look at COVID-19 through a sample of four latitude zones around the world. We compared and contrasted different regions and showed a north-to-south longitudinal slice of the Americas.</div>
                    </div>
                    <div className={"cards"}>
                        <img src={'/assets/map.png'} style={{backgroundColor: "#EC9A29"}}/>
                        <div className={"cardTitle"}>GDS Map</div>
                        <div className={"cardContent"}>Using Google Data Studio, you can dive into a detailed exploration of the data by date, country, latitude, and longitude. We can see another view of the four-zones concept and the longitudinal slice of the Americas.</div>
                    </div>
                    <div className={"cards"}>
                        <img src={'/assets/modeling.png'} style={{backgroundColor: "#A8201A"}}/>
                        <div className={"cardTitle"}>Modeling</div>
                        <div className={"cardContent"}>See early work of a compartmental network model of the virus spread and a Fourier-based analysis of the reported cases across the world.</div>
                    </div>
                </div>
            </div>
        </div>
        <div id={"section3"}>
            <div>
                <div>Finally, our site is constantly redesigned so it might be a bit unresponsive from time to time.  But one of our great design features is that you can download any of the data yourself to continue your own exploration.</div>
                <div>Stay safe!</div>
            </div>
        </div>
    </div>
  );
}

export default Home;
