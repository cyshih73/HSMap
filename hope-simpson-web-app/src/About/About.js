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
    </div>
  )
};
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
                      <li>North Temperate Zone: Latitudes at more than 30o N</li>
                      <li>North Tropical Zone: Latitudes from the equator to 30o N</li>
                      <li>South Tropical Zone: Latitudes from the equator to 30o S</li>
                      <li>South Tropical Zone: Latitudes at more than 30o S</li>
                    </ul>
                  </li>
                  <li>For each zone of latitude, he showed the distribution (histogram) of influenza cases by month</li>
                  <li>
                      He overlayed the “Path of Vertical Solar Radiation”
                      <ul>
                        <li>Due to the tilt of the earth’s axis of rotation, the path of vertical solar radiation sweeps from the most northern point (23.5o N) to the most southern point (23.5o S)</li>
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

      /*
    gsap.from('.welcomeImages',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.welcomeImages',
        start: "center 80%"
      }});*/
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
    /*
    gsap.from('.proposalContent .latitudeImage',{opacity:0,x:-100,duration:1,scrollTrigger:{
        trigger:'.proposalContent .latitudeImage',
        start: "center 80%"
      }});
*/
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

  })
  return (
    <div className="bodyMarginTop">
      <div className="text-center mainTitle">About the Hope-Simpson Concept</div>
      { Slideshow() }
    </div>
  );
}

export default About;
