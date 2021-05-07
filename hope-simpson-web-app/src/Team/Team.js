import React, {useEffect} from "react";
import './Team.css';
import Profile from "./Profile";
import {profiles2020,profiles2021,ProfRayInfo} from "./ProfileDatabase";
import Profile2 from "./Profile2";
import {TweenLite,gsap,Power3,Linear} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {createRandomNumber} from "../ Repository/RepositoryFunction";

gsap.registerPlugin(ScrollTrigger);

const RICE_IMAGE_PATH = '/assets/rice.jpg';

function Team() {

  // Sort names alphabetically except Professor Simar
  // const profileList = [
  //   ...profiles.slice(0, 1),
  //   ...profiles.slice(1)
  //     .sort((a, b) => (a.name > b.name) ? 1 : -1)];
    const profile2020List = [...profiles2020];
    const profile2021List = [...profiles2021];
    const rayDivName="Project Manager";
    const year2021Name="Members in 2021 Spring";
    const year2020Name="Members in 2020 Fall ";
    const ProfRay=()=>{
        return (
            <div className={"rayDiv"}>
                <div className={"rayDivName"}>
                    {
                        rayDivName.split('').map((eachChar,index)=>
                            <div key={index} id={"rayDivName"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                        )
                    }
                </div>
                <div>
                    <div className={"rayImageDiv"}>
                        <img src={ProfRayInfo.avatar}/>
                    </div>
                    <div className={"rayInfo"}>
                        <div className={"rayName"}>
                            {
                                ProfRayInfo.name.split('').map((eachChar,index)=>
                                    <div key={index} id={"rayName"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                                )
                            }
                        </div>
                        <div className={"rayTitle"}>
                            {
                                ProfRayInfo.title.split('').map((eachChar,index)=>
                                    <div key={index} id={"rayTitle"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                                )
                            }
                        </div>
                        <div className={"rayOrg"}>
                            {
                                ProfRayInfo.organization.split('').map((eachChar,index)=>
                                    <div key={index} id={"rayOrg"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                                )
                            }
                        </div>
                        <div className={"rayRoles"}>
                            {
                                ProfRayInfo.roles.map((role,index)=>
                                    <div id={"rayRole"+index} key={index}>{role}</div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  useEffect(()=>{

      var rayTimeLine = gsap.timeline({
          scrollTrigger:{
              trigger: ".rayDiv",
              scrub: 1,
              start: "top 60%",
              end: "+=80% 70%"
          }
      })
      rayTimeLine.from(".rayImageDiv",{scale:0,duration: 1, ease: Power3.easeIn});
      for(var i=0;i<ProfRayInfo.name.length;i++){
          rayTimeLine.from("#rayName"+i,{opacity: 0,x: 100,duration: 1, ease: Power3.easeIn});
      }
      for(var i=0;i<ProfRayInfo.title.length;i++){
          rayTimeLine.from("#rayTitle"+i,{opacity: 0,x: 100,duration: 1, ease: Power3.easeIn});
      }
      for(var i=0;i<ProfRayInfo.organization.length;i++){
          rayTimeLine.from("#rayOrg"+i,{opacity: 0,y: 100,duration: 1, ease: Power3.easeIn});
      }
      for(var i=0;i<ProfRayInfo.roles.length;i++){
          rayTimeLine.from("#rayRole"+i,{scale:0,duration: 1, ease: Power3.easeIn});
      }

      var year2021TimeLine= gsap.timeline({
          scrollTrigger:{
              trigger: ".year2021Name",
              scrub: 1,
              start: "top 70%",
              end: "+=80% 70%"
          }
      })
      for(var i=0;i<year2021Name.length;i++){
          year2021TimeLine.from("#year2021Name"+i,{opacity: 0,x:createRandomNumber(50,80,true),y: createRandomNumber(50,80,true),duration: 1, ease: Power3.easeIn});
      }
      var rayDivNameTimeLine= gsap.timeline({
          scrollTrigger:{
              trigger: ".rayDivName",
              scrub: 1,
              start: "top 70%",
              end: "+=80% 70%"
          }
      })
      for(var i=0;i<rayDivName.length;i++){
          rayDivNameTimeLine.from("#rayDivName"+i,{opacity: 0,x:createRandomNumber(50,80,true),y: createRandomNumber(50,80,true),duration: 1, ease: Power3.easeIn});
      }
      var year2020TimeLine= gsap.timeline({
          scrollTrigger:{
              trigger: ".year2020Name",
              scrub: 1,
              start: "top 70%",
              end: "+=80% 70%"
          }
      })
      for(var i=0;i<year2020Name.length;i++){
          year2020TimeLine.from("#year2020Name"+i,{opacity: 0,x:createRandomNumber(50,80,true),y: createRandomNumber(50,80,true),duration: 1, ease: Power3.easeIn});
      }

      gsap.from('.lineFrom2021To2020',{height: 0,duration:1,ease: "linear",scrollTrigger:{
              trigger:'.profiles2021',
              start: "top 70%",
              end: "+=100% 100%",
              scrub: true
          }});
      gsap.from('.lineFrom2020ToEnd',{height: 0,duration:1,ease: "linear",scrollTrigger:{
              trigger:'.profiles2020',
              start: "top 70%",
              end: "bottom 100%",
              scrub: true
          }});



      var t2021=gsap.timeline({
          scrollTrigger:{
              trigger: ".profiles2021",
              scrub: 1,
              start: "top 70%",
              end: "+=95% 100%",
          },
      });

      var t2020=gsap.timeline({
          scrollTrigger:{
              trigger: ".profiles2020",
              scrub: 1,
              start: "top 70%",
              end: "+=100% 100%"

          }
      })
      for(var i=0;i<profile2020List.length;i++){
          t2020.from("#profileDiv2020"+i,{opacity:0,duration: 1, ease: Power3.easeIn})
      }
      for(var i=0;i<profile2021List.length;i++){
          t2021.from("#profileDiv2021"+i,{opacity:0,duration: 1, ease: Power3.easeIn})
      }

  });


  return (

    <div>
        <div className={"schoolImage"}>
            <div className={"content"}>Team Introduction</div>
            <div className={"scrollForMore"}>
                <div>Scroll For More Information</div>
                <div className="arrowDown"></div>
            </div>
            <img src={ RICE_IMAGE_PATH } alt="" className="img-fluid"/>
        </div>
        <ProfRay/>
        <div>
            <div className={"year2021 years"}>
                <div className={"yearName year2021Name"}>
                    {
                        year2021Name.split('').map((eachChar,index)=>
                            <div key={index} id={"year2021Name"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                        )
                    }
                </div>
                <div className={"profiles profiles2021"} >
                    {
                        profile2021List.map((profile,index)=>
                            <div key={index} className={"profileDiv"} id={"profileDiv2021"+index}>
                                <Profile2
                                    name={ profile.name }
                                    avatar={ profile.avatar }
                                    title={ profile.title }
                                    organization={ profile.organization }
                                    roles={ profile.roles }
                                    link={ profile.link }
                                />
                            </div>
                        )
                    }

                    <div className={"lineFrom2021To2020"}>
                        <div className={"arrowLine"}></div>
                        <div className={"arrow"}></div>
                    </div>
                </div>
            </div>
        </div>
         <div>
          <div className={"year2020 years"}>
              <div className={"yearName year2020Name"}>
                  {
                      year2020Name.split('').map((eachChar,index)=>
                          <div key={index} id={"year2020Name"+index}>{eachChar.replace(/ /g, "\u00a0")}</div>
                      )
                  }
              </div>
              <div className={"profiles profiles2020"} id="myProfiles">
                  {
                      profile2020List.map((profile,index)=>
                        <div key={index} className={"profileDiv"} id={"profileDiv2020"+index}>
                            <Profile2
                                name={ profile.name }
                                avatar={ profile.avatar }
                                title={ profile.title }
                                organization={ profile.organization }
                                roles={ profile.roles }
                                link={ profile.link }
                            />
                        </div>
                      )
                  }
                  <div className={"lineFrom2020ToEnd"}>
                      <div className={"arrowLine"}></div>
                      <div className={"arrow"}></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Team;
