import React, {useEffect} from "react";
import './About.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {TimelineLite,gsap,Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const slideImages = [
  './images/p0.jpg',
  './images/p1.jpg',
  './images/p2.jpg',
  './images/p3.jpg',
  './images/p4.jpg',
  './images/p5.jpg',
  './images/p6.jpg',
  './images/p7.jpg',
  './images/p8.jpg',
  './images/p9.jpg',
  './images/p10.jpg',
  './images/p11.jpg'
];

const properties = {
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className={"slides"}>
        <Welcome/>
        <Inspiration/>
        <Distribution/>
        <Proposal/>
        <SeasonOutBreak/>
        <Work/>
        <Region/>
        <Database/>
        <Hypothesis/>
        <Initial/>
        <Phase/>
        <Next/>
    </div>
  )
};
const Next=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title nextTitle"}>What we find: phase shifts and moderated responses</div>
                <div className={"nextContent"}>
                    <div className={"nextText"}>
                        <ul>
                            <li>
                                A new cohort of students is forming:
                                <ul>
                                    <li>Former team members and several new team members</li>
                                </ul>
                            </li>
                            <li>
                                Improve data visualization tools
                            </li>
                            <li>
                                VM support for automatic daily update of databases.
                            </li>
                            <li>
                                Let user compare histograms, etc.
                            </li>
                            <li>
                                Looking at higher resolution analysis both temporally (weekly) and spatially (latitude)
                            </li>
                            <li>
                                Explore network based models that incorporate travel
                            </li>
                            <li>
                                And more!
                            </li>
                        </ul>
                    </div>
                    <div className={"nextImage"}>
                        <img src={"/images/initialItaly.png"} className={"initialItalyImage"}/>
                        <img src={"/images/initialVictoria.png"} className={"initialVictoriaImage"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Phase=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title phaseTitle"}>What we find: phase shifts and moderated responses</div>
                <div className={"phaseContent"}>
                    <div>
                        <div className={"phaseText"}>
                            <ul>
                                <li>
                                    We can overlay regions of the world to see different patterns.
                                </li>
                                <li>
                                    Overlay N temperate (Italy) and S temperate  (Victoria, Australia)
                                    <ul>
                                        <li>The winter spike in  Victoria overlaps the summer quiet of Italy</li>
                                    </ul>
                                </li>
                                <li>
                                    Compare tropical regions that show an initial outbreak followed by a more moderated response
                                    <ul>
                                        <li>Florida, USA</li>
                                        <li>Egypt</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={"phaseCompareImageDiv"}>
                            <img src={"/images/phaseCompare.png"} className={"phaseCompareImage"}/>
                        </div>
                    </div>
                    <div className={"phaseImage"}>
                        <div>
                            <img src={"/images/phaseFlorida.png"} className={"phaseFloridaImage"}/>
                        </div>
                        <div>
                            <img src={"/images/phaseEgypt.png"} className={"phaseEgyptImage"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Initial=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title initialTitle"}>What we find: initial conditions</div>
                <div className={"initialContent"}>
                    <div className={"initialImages"}>
                        <div>
                            <img src={"/images/initialItaly.png"} className={"initialItalyImage"}/>
                        </div>
                        <div>
                            <img src={"/images/initialVictoria.png"} className={"initialVictoriaImage"}/>
                        </div>
                    </div>
                    <div className={"initialText"}>
                        <ul>
                            <li>
                                COVID-19 is referred to as novel as it is new and thus we have little resistance to it, currently.
                            </li>
                            <li>
                                The first significant cases were seen in Italy (N Temperate) in February, after the December solstice.
                                <ul>
                                    <li>They had the drop off in the summer</li>
                                    <li>They are now into the winter</li>
                                </ul>
                            </li>
                            <li>
                                Victoria Australia (S Temperate)
                                <ul>
                                    <li>Had a small exposure during their summer.</li>
                                    <li>They have gone through a complete winter and saw the spike Hope-Simpson might expect to see.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
const Hypothesis=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title hypothesisTitle"}>Hope-Simpson hypothesis of dynamics of virus spread</div>
                <div className={"hypothesisContent"}>
                    <div className={"hypothesisText"}>
                        <span>Chart is a histogram of weekly confirmed COVID-19 cases (N = 935k) in Italy (Latitude 41.87)</span>
                    </div>
                    <img src={"/images/hypothesis.png"} className={"hypothesisImage"}/>
                </div>
            </div>
        </div>
    )
}
const Database=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title databaseTitle"}>Our Databases</div>
                <div className={"databaseContent"}>
                    <div className={"databaseText"}>
                        <ul>
                            <li>
                                Global and the US data from JHU GitHub repo: <a target="_blank" href={"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"}>Click Me!</a>
                                <ul>
                                    <li>The dataset is located at "COVID-19/csse_covid_19_data/csse_covid_19_time_series/”</li>
                                    <li>Global and US data are from "time_series_covid19_confirmed_global.csv" and "time_series_covid19_confirmed_US.csv", respectively</li>
                                    <li>Harris County data also comes from here.</li>
                                </ul>
                            </li>
                            <li>
                                Brazil data:<a target="_blank" href={"https://github.com/wcota/covid19br"}>Click Me!</a>
                            </li>
                            <li>
                                Argentina data:<a target="_blank" href={"https://datos.gob.ar/dataset/salud-covid-19-casos-registrados-republica-argentina"}>Click Me!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
const Region=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title regionTitle"}>Regional Samples</div>
                <div className={"regionContent"}>
                    <div className={"regionImage"}>
                        <img src={"/images/worldMap.png"}/>
                    </div>
                    <div className={"regionText"}>
                        <ul>
                            <li>We chose a number of sample regions from each of the four zones.</li>
                            <li>
                                Our criteria was
                                <ul>
                                    <li>Geographically smaller regions i.e. US states rather than entire United States.</li>
                                    <li>Regions that tend to be localized to a smaller range of latitudes i.e. Wisconsin rather than California</li>
                                    <li>Regions that have a stable and accessible record of testing.</li>
                                    <li>Avoid oversampling a zone i.e. don’t just look at Europe and US.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Work=()=>{
    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title workTitle"}>Our work: A Hope-Simpson inspired look at COVID-19 cases </div>
                <div className={"workContent"}>
                    <div className={"workText"}>
                        <div>
                            <ul>
                                <li>
                                    Inspiration from Hope-Simpson
                                    <ul>
                                        <li>
                                            Global perspective
                                            <ul>
                                                <li>Pull from databases with global case information, including COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University and others.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Zones of latitude
                                            <ul>
                                                <li>Geographic samples organized according to the same four zones of latitude used by Hope-Simpson.</li>
                                                <li>Adjust geographic sampling to pick smaller regions in each zone of latitude.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            View distribution of cases over time
                                            <ul>
                                                <li>Display histogram of cases on a weekly basis</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Tools that Hope-Simpson didn’t have
                                    <ul>
                                        <li>Tableau</li>
                                        <li>Google Data Studio</li>
                                        <li>Python and Matlab</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={"/images/workGithub.png"} className={"workGithubImage"}/>
                </div>
                <hr/>
                <div className={"workImages"}>
                    <img src={"/images/tableauLogo.png"} className={"tableauLogoImage"}/>
                    <img src={"/images/googleDataStudioLogo.png"} className={"googleDataStudioLogoImage"}/>
                    <img src={"/images/mathWorksLogo.png"} className={"mathWorksLogoImage"}/>
                </div>
            </div>
        </div>
    )
}
const SeasonOutBreak=()=>{
  return (
      <div>
        <div className={"slidesInnerDiv"}>
          <div className={"title seasonTitle"}>Influenza Outbreaks Follow the Season and Latitude</div>
          <div className={"seasonContent"}>
            <img src={"/images/latitudeCategory.png"} className={"latitudeImage"}/>
            <div className={"seasonText"}>
              <div>
                The spike in influenza cases occurs in January in the north temperate zone
              </div>
              <div>
                A more moderated distribution of influenza cases nearer the equator, in the north and south tropical zones
              </div>
              <div>
                The spike in influenza cases, six months later, occurs in July in the south temperate zone
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
const Proposal=()=>{
  return (
      <div>
        <div className={"slidesInnerDiv"}>
          <div className={"title proposalTitle"}>Proposal of a Seasonally Mediated Stimulus</div>
          <div className={"proposalContent"}>
            <img src={"/images/latitudeCategory.png"} className={"latitudeImage"}/>
            <div class={"proposalText"}>
              <ul>
                <li>
                  From The Transmission of Epidemic Influenza
                  <ul>
                    <li>PROPOSITION 3: CONCERNING SEASONAL REACTIVATION OF PERSISTENT INFLUENZA VIRUS</li>
                    <ul>
                      <li>The persistent influenza virus infecting human carriers is annually reactivated to infectiousness by a seasonally mediated stimulus. The carrier, usually without again falling ill, becomes highly infectious for a brief period and his nonimmune companions, if infected, rapidly develop an attack of influenza.” (p. 193)</li>
                    </ul>
                  </ul>
                </li>
                <li>“The conclusion seems inescapable that, viewed on a global scale, epidemic influenza is moving annually south and then north through the world population, a smooth yearly scanning of the world very different from the local episodic picture of the disease.”</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}
const Distribution=()=>{
  return (
      <div>
        <div className={"slidesInnerDiv"}>
          <div className={"title distributeTitle"}>Distribution of Influenza Outbreaks by Latitude Throughout The Year</div>
          <div className={"distributeContent"}>
            <div className={"distributeText"}>
              <div className={"distributeInnerText"}>
                <ul>
                  <li>
                    Hope-Simpson divided the world into four latitudinal zones
                    <ul>
                      <li>North Temperate Zone: Latitudes at more than 30&deg; N</li>
                      <li>North Tropical Zone: Latitudes from the equator to 30&deg; N</li>
                      <li>South Tropical Zone: Latitudes from the equator to 30&deg; S</li>
                      <li>South Tropical Zone: Latitudes at more than 30&deg; S</li>
                    </ul>
                  </li>
                  <li>For each zone of latitude, he showed the distribution (histogram) of influenza cases by month</li>
                  <li>
                      He overlayed the “Path of Vertical Solar Radiation”
                      <ul>
                        <li>Due to the tilt of the earth’s axis of rotation, the path of vertical solar radiation sweeps from the most northern point (23.5&deg; N) to the most southern point (23.5&deg; S)</li>
                      </ul>
                  </li>
                </ul>
              </div>
              <div>
                <img src={"/images/tiltEarth.png"} className={"tiltEarthImage"}/>
              </div>
            </div>
            <img src={"/images/latitudeCategory.png"} className={"latitudeImage"}/>

          </div>
        </div>
      </div>

  )

}
const Welcome=()=>{
  return (
      <div>
        <div className={"slidesInnerDiv"}>
          <div className={"title welcomeTitle"}>Welcome</div>
          <div>
            <div className={"welcomeText"}>
              The Hope-Simpson Map project (HS) started by students from the fall 2020 class on advanced computer
              architecture.
              <div>
                <ul>
                  <li>Computer Science majors</li>
                  <li>Electrical and Computer Engineering majors</li>
                </ul>
              </div>
            </div>
            <div className={"myLine"}></div>
            <div>
              <div style={{textAlign: "center"}}>We created a web platform based on</div>
              <div className={"welcomeImages"}>
                <div className={"welcomeImages1"}>
                  <img src={"/images/database.png"}/>
                  <span>Modern databases</span>
                </div>
                <div className={"welcomeImages2"}>
                  <img src={"/images/visualization.png"}/>
                  <span>Data visualization</span>
                </div>
                <div className={"welcomeImages3"}>
                  <img src={"/images/web.png"}/>
                  <span>Web design</span>
                </div>
                <div className={"welcomeImages4"}>
                  <img src={"/images/machine.png"}/>
                  <span>Virtual machines</span>
                </div>
                <div className={"welcomeImages5"}>
                  <img src={"/images/signal.png"}/>
                  <span>Signal processing</span>
                </div>
                <div className={"welcomeImages6"}>
                  <img src={"/images/data.png"}/>
                  <span>Data analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
const Inspiration=()=>{
  return (
      <div>
        <div className={"slidesInnerDiv"}>
          <div className={"title inspirationTitle"}>Inspiration</div>
          <div className={"inspirationDiv"}>
            <img src={"/images/BookCover.png"} className={"bookCoverImage"}/>
            <div className={"inspirationText"}>
                <ul>
                  <li>
                    Robert Edgar Hope-Simpson (1908-2003) was a general practitioner.
                    <ul>
                      <li>
                        He showed that shingles was caused by reactivation of the chickenpox virus.
                      </li>
                    </ul>
                  </li>
                  <li>The influenza epidemic of 1932-33,  the year he began his practice, motivated him to study the influenza virus.</li>
                  <li>
                    60 years of extensive historical research culminated in the publication of his book The Transmission of Epidemic Influenza
                    <ul>
                      <li>Includes Houston influenza data</li>
                    </ul>
                  </li>
                  <li>Proposed that person-to-person transmission was insufficient to explain the pattern of influenza outbreaks around the world.</li>
                  <li>Proposed an influential seasonally-mediated mechanism.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

  )
}
function About() {
  let t1=new  TimelineLite({delay: 0.3});
  useEffect(()=>{
    //t1.from('.mainTitle',{y:15,opacity:0,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages1',{opacity:0,x:-100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages2',{opacity:0,x:-100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages3',{opacity:0,x:-100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages4',{opacity:0,x:100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages5',{opacity:0,x:100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
      t1.from('.welcomeImages6',{opacity:0,x:100,duration:1,ease: Power3.easeIn,delay:0.1},'Start');
    gsap.from('.welcomeText',{opacity:0,y:100,duration:1});
    gsap.from('.welcomeTitle',{opacity:0,y:100,duration:1});



    gsap.from('.bookCoverImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.bookCoverImage',
        start: "top 80%"
      }});
    gsap.from('.inspirationText',{opacity:0,x:100,duration:1,scrollTrigger:{
        trigger:'.inspirationText',
        start: "top 80%"
      }});
    gsap.from('.inspirationTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.inspirationTitle',
        start: "top 80%"
      }});
    gsap.from('.distributeTitle',{opacity:0,y:-100,duration:1,scrollTrigger:{
        trigger:'.distributeTitle',
        start: "top 80%"
      }});
    gsap.from('.distributeInnerText',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.distributeInnerText',
        start: "top 80%"
      }});
    gsap.from('.tiltEarthImage',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.tiltEarthImage',
        start: "top 80%"
      }});
      gsap.from('.distributeContent .latitudeImage',{opacity:0,x:400,duration:1,rotation: 180,scrollTrigger:{
              trigger:'.distributeContent .latitudeImage',
              start: "top 80%"
          }});
    gsap.from('.proposalTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.proposalTitle',
        start: "top 80%"
      }});
    gsap.from('.proposalText',{opacity:0,x:100,duration:1,scrollTrigger:{
        trigger:'.proposalText',
        start: "top 80%"
      }});

    gsap.from('.proposalContent .latitudeImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.proposalContent .latitudeImage',
        start: "center 80%"
      }});

    gsap.from('.seasonTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
        trigger:'.seasonTitle',
        start: "center 80%"
      }});
    gsap.from('.seasonText',{opacity:0,x:100,duration:1,scrollTrigger:{
        trigger:'.seasonText',
        start: "center 80%"
      }});
    gsap.from('.seasonContent .latitudeImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.seasonContent .latitudeImage',
        start: "center 80%"
      }});

      gsap.from('.workTitle',{opacity:0,y:-100,duration:1,scrollTrigger:{
              trigger:'.workTitle',
              start: "center 80%"
          }});
      gsap.from('.workText',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.workText',
              start: "center 80%"
          }});
      gsap.from('.workGithubImage',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.workGithubImage',
              start: "center 80%"
          }});
      gsap.from('.workImages',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.workImages',
              start: "center 90%"
          }});

      gsap.from('.regionTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.regionTitle',
              start: "center 80%"
          }});

      gsap.from('.regionImage',{opacity:0,x:100,y:-100,duration:1,scrollTrigger:{
              trigger:'.regionImage',
              start: "center 80%"
          }});

      gsap.from('.regionText',{opacity:0,x:-100,y:100,duration:1,scrollTrigger:{
              trigger:'.regionText',
              start: "center 90%"
          }});

      gsap.from('.databaseTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.databaseTitle',
              start: "center 80%"
          }});

      gsap.from('.databaseText',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.databaseText',
              start: "center 80%"
          }});


      //t1.staggerFrom('.databaseText',1,{y:30,ease: Power3.easeOut,opacity:0},0.35);
      gsap.from('.hypothesisTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.hypothesisTitle',
              start: "center 80%"
          }});
      gsap.from('.hypothesisText',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.hypothesisText',
              start: "center 80%"
          }});
      gsap.from('.hypothesisImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.hypothesisImage',
              start: "center 80%"
          }});
      gsap.from('.initialTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.initialTitle',
              start: "center 80%"
          }});
      gsap.from('.initialImages .initialItalyImage',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.initialImages .initialItalyImage',
              start: "center 80%"
          }});
      gsap.from('.initialImages .initialVictoriaImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.initialImages .initialVictoriaImage',
              start: "center 80%"
          }});
      gsap.from('.initialText',{opacity:0,x:100,y:100,duration:1,scrollTrigger:{
              trigger:'.initialText',
              start: "center 80%"
          }});

      gsap.from('.phaseTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.phaseTitle',
              start: "center 80%"
          }});
      gsap.from('.phaseText',{opacity:0,x:100,y: 100,duration:1,scrollTrigger:{
              trigger:'.phaseText',
              start: "center 80%"
          }});
      gsap.from('.phaseCompareImageDiv',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.phaseCompareImageDiv',
              start: "center 80%"
          }});
      gsap.from('.phaseFloridaImage',{opacity:0,y:-100,duration:1,scrollTrigger:{
              trigger:'.phaseFloridaImage',
              start: "center 80%"
          }});
      gsap.from('.phaseEgyptImage',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'.phaseEgyptImage',
              start: "center 80%"
          }});
      gsap.from('nextTitle',{opacity:0,y:100,duration:1,scrollTrigger:{
              trigger:'nextTitle',
              start: "center 90%"
          }});
      gsap.from('.nextImage .initialItalyImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
              trigger:'.nextImage .initialItalyImage',
              start: "center 90%"
          }});
      gsap.from('.nextText',{opacity:0,x:100,duration:1,scrollTrigger:{
              trigger:'.nextText',
              start: "center 90%"
          }});
      gsap.from('.nextImage .initialVictoriaImage',{opacity:0,y:-100,duration:1,scrollTrigger:{
              trigger:'.nextImage .initialVictoriaImage',
              start: "center 90%"
          }});
  })
  return (
    <div className="bodyMarginTop">
      <div className="text-center mainTitle">About the Hope-Simpson Concept</div>
      { Slideshow() }
    </div>
  );
}

export default About;
