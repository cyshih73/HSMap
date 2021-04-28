import React, {Component, useEffect, useState} from 'react';
import './Home.css';
import {TweenLite,gsap,Power3,Linear} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ProfRayInfo} from "../Team/ProfileDatabase";
import {createRandomNumber} from "../ Repository/RepositoryFunction";

gsap.registerPlugin(ScrollTrigger);
// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/hs-world-map-all/Dashboard-WorldMapAll';
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };

/*
class Home extends Component{
    constructor() {
        super();
        this.state={
            smallScreen: false,
            iframeURL:"https://datastudio.google.com/embed/reporting/b5f88341-c05e-4114-a695-1923b4cd7bd2/page/TxgjB"
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        console.log(window.innerWidth);
        if(window.innerWidth>1000){
            this.setState({...this.state,smallScreen: false,iframeURL:"https://datastudio.google.com/embed/reporting/b5f88341-c05e-4114-a695-1923b4cd7bd2/page/TxgjB"});
        }
        else{
            this.setState({...this.state,smallScreen: true,iframeURL:"https://datastudio.google.com/embed/u/0/reporting/5aa0f5f5-2bf9-4654-8b36-7b6df6dc3d31/page/TxgjB"});
        }
        //this.setState({hideNav: window.innerWidth <= 760});
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    showTitle=()=>{
        let title="Exploring COVID-19 Cases Around the World";
        let subTitle="Modern Tools Applied to a 90’s Concept";
        return (
            <div className={"homeTitles"}>
                <div className="text-center mainTitle">
                    {
                        title.split('').map((eachChar,index)=>{
                            return <span key={index} id={`mainTitle${index}`}>{eachChar}</span>
                        })
                    }
                </div>
                <div className="text-center subTitle">
                    {
                        subTitle.split('').map((eachChar,index)=>{
                            return <span key={index} id={`subTitle${index}`}>{eachChar}</span>
                        })
                    }
                </div>
            </div>
        )
    }

    introduction=()=>{
        return (
            <div id={"section1"}>
                <div className={"title"}>Introduction</div>
                <div className="">A very cordial welcome to the Hope-Simpson project started by a group of students from the fall 2020 class of COMP/ELEC 425/554! We created a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. We analyzed COVID-19 data on our platform based on Robert Edgar Hope-Simpson's perspective and his study of the spread of the influenza virus.</div>
                <br/>
                <div className="">On our home page, you can begin to explore COVID-19 cases around the world. The histogram displays confirmed cases in weekly increments based on the locations you selected.</div>
            </div>
        )
    }
    mainTableau=()=>{
        return (
            <div className={"homeTableau"}>
                <div style={{paddingBottom:this.state.smallScreen?"75%":"45%"}}>
                    <iframe scrolling="no" src={this.state.iframeURL}></iframe>
                </div>
            </div>
        )
    }
    endSection=()=>{
        return (
            <div id={"section3"}>
                <div>
                    <div>Finally, our site is constantly redesigned so it might be a bit unresponsive from time to time.  But one of our great design features is that you can download any of the data yourself to continue your own exploration.</div>
                    <div>Stay safe!</div>
                </div>
            </div>
        )
    }
    mainInfo=()=>{
        return (
            <div id={"section2"}>
                <div>
                    <p className="">Let us take you through a journey of ways to look at the current worldwide pandemic through the lens of Hope-Simpson. Here is what you can find on our other pages:</p>
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
        )
    }


    render() {
        return (
            <div className={"home-container bodyMarginTop"}>
                {this.showTitle()}
                {this.introduction()}
                {this.mainTableau()}
                {this.mainInfo()}
                {this.endSection()}
            </div>
        );
    }
}
*/
function Home() {
    const [allValues,setAllValues]=useState({
        smallScreen: false,
        iframeURL:"https://datastudio.google.com/embed/reporting/b5f88341-c05e-4114-a695-1923b4cd7bd2/page/TxgjB"
    });


    let mainTitle="Exploring COVID-19 Cases Around the World";
    let mainSubTitle="Modern Tools Applied to a 90’s Concept";
    let introTitle="Introduction";
    useEffect(()=>{
        var titleTimeline=gsap.timeline();
        for(var i=0;i<mainTitle.length;i++){
            titleTimeline.from("#mainTitle"+i,{opacity: 0,x: 100,duration: 0.04, ease: Power3.easeIn});
        }
        var subTitleTimeLine=gsap.timeline();
        for(var i=mainSubTitle.length-1;i>=0;i--){
            subTitleTimeLine.from("#subTitle"+i,{opacity: 0,x: -100,duration: 0.04, ease: Power3.easeIn});
        }
        for(var i=0;i<introTitle.length;i++){
            subTitleTimeLine.from("#introTitle"+i,{opacity: 0,x: createRandomNumber(50,80,true),y:createRandomNumber(50,80,true),duration: 0.04, ease: Power3.easeIn});
        }
        subTitleTimeLine.from(".section1Text1",{opacity: 0,duration: 0.5, ease: Power3.easeIn});
        subTitleTimeLine.from(".section1Text2",{opacity: 0,duration: 0.5, ease: Power3.easeIn});
    })

    function resize(){
        console.log(window.innerWidth);
        if(window.innerWidth>1000&&allValues.smallScreen==true){
            setAllValues({smallScreen: false,iframeURL:"https://datastudio.google.com/embed/reporting/b5f88341-c05e-4114-a695-1923b4cd7bd2/page/TxgjB"});
        }
        else if(window.innerWidth<=1000&&allValues.smallScreen==false){
            setAllValues({smallScreen: true,iframeURL:"https://datastudio.google.com/embed/u/0/reporting/5aa0f5f5-2bf9-4654-8b36-7b6df6dc3d31/page/TxgjB"});

        }
    }
    window.addEventListener("resize", resize);
    resize();

    const ShowTitle=()=>{
        var count=0;
        return (
            <div className={"homeTitles"}>
                <div className="text-center mainTitle displayFlex displayCenter displayWrap">
                    {
                        mainTitle.split(' ').map((eachWord,index)=>{
                            return (
                                <div className="displayFlex">
                                    {
                                        eachWord.split('').map((eachChar,index)=> {
                                            return <div key={count} id={`mainTitle${count++}`}>{eachChar.replace(/ /g, "\u00a0")}</div>
                                        })
                                    }
                                    &nbsp;
                                </div>
                            )

                        })
                    }
                </div>
                {showSubTitle()}
            </div>
        )
    }
    const showSubTitle=()=>{
        var count=0;
        return (
            <div className="text-center subTitle displayFlex displayCenter displayWrap">
                {
                    mainSubTitle.split(' ').map((eachWord,index)=>{
                        return (
                            <div className="displayFlex">
                                {
                                    eachWord.split('').map((eachChar,index)=> {
                                        return <span key={count} id={`subTitle${count++}`}>{eachChar.replace(/ /g, "\u00a0")}</span>
                                    })
                                }
                                &nbsp;
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    const Introduction=()=>{
        return (
            <div id={"section1"}>
                <div className={"title displayFlex"}>
                    {
                        introTitle.split('').map((eachChar,index)=>{
                            return <div key={index} id={`introTitle${index}`}>{eachChar.replace(/ /g, "\u00a0")}</div>
                        })
                    }
                </div>
                <div className="section1Text1">A very cordial welcome to the Hope-Simpson project started by a group of students from the fall 2020 class of COMP/ELEC 425/554! We created a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. We analyzed COVID-19 data on our platform based on Robert Edgar Hope-Simpson's perspective and his study of the spread of the influenza virus.</div>
                <br/>
                <div className="section1Text2">On our home page, you can begin to explore COVID-19 cases around the world. The histogram displays confirmed cases in weekly increments based on the locations you selected.</div>
            </div>
        )
    }
    const MainTableau=()=>{
        useEffect(()=>{
            gsap.from('.homeTableau',{opacity: 0,x: 200,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'.homeTableau',
                    start: "top 50%",
                    end: "center 70%"
                }});
        })
        return (
            <div className={"homeTableau"}>
                <div style={{paddingBottom:allValues.smallScreen?"75%":"45%"}}>
                    <iframe scrolling="no" frameBorder="0" src={allValues.iframeURL}></iframe>
                </div>
            </div>
        )
    }
    const EndSection=()=>{
        useEffect(()=>{
            gsap.from('#section3 .endText',{opacity: 0,y: 200,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'#section3',
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }});
        })
        return (
            <div id={"section3"}>
                <div className={"endText"}>
                    <div>Finally, our site is constantly redesigned so it might be a bit unresponsive from time to time.  But one of our great design features is that you can download any of the data yourself to continue your own exploration.</div>
                    <div>Stay safe!</div>
                </div>
            </div>
        )
    }
    const MainInfo=()=>{
        useEffect(()=>{
            gsap.from('#section2 .section2Title',{opacity: 0,y: -100,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'#section2',
                    start: "top 70%",
                    end: "bottom bottom",
                    scrub: true,
                }});
            gsap.from('#section2 .aboutCard',{opacity: 0,x: -100,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'#section2 .aboutCard',
                    start: "top 70%",
                    end: "50% bottom",
                    scrub: true
                }});
            gsap.from('#section2 .tableauCard',{opacity: 0,y: -100,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'#section2 .tableauCard',
                    start: "top 70%",
                    end: "50% bottom",
                    scrub: true
                }});
            gsap.from('#section2 .mapCard',{opacity: 0,y: 100,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'#section2 .mapCard',
                    start: "top 70%",
                    end: "50% bottom",
                    scrub: true
                }});
            gsap.from('#section2 .modelingCard',{opacity: 0,x: 100,duration:1,ease: "linear",scrollTrigger:{
                    trigger:'#section2 .modelingCard',
                    start: "top 70%",
                    end: "50% bottom",
                    scrub: true
                }});
        })
        return (
            <div id={"section2"}>
                <div>
                    <p className="section2Title">Let us take you through a journey of ways to look at the current worldwide pandemic through the lens of Hope-Simpson. Here is what you can find on our other pages:</p>
                    <div className={"homeCards"}>
                        <div className={"cards aboutCard"}>
                            <img src={'/assets/about.png'} style={{backgroundColor: "#143642"}}/>
                            <div className={"cardTitle"}>About</div>
                            <div className={"cardContent"}>Information on the background inspiration, which is the life work of Robert Edgar Hope-Simpson (1908-2003), a general practitioner who studied influenza cases around the world for sixty years. Also, an explanation of the Hope-Simpson concept and about our COVID-19 data.</div>
                        </div>
                        <div className={"cards tableauCard"}>
                            <img src={'/assets/tableau.png'} style={{backgroundColor: "#0F8B8D"}}/>
                            <div className={"cardTitle"}>Tableau Map</div>
                            <div className={"cardContent"}>Using Tableau, you can take a Hope-Simpson inspired look at COVID-19 through a sample of four latitude zones around the world. We compared and contrasted different regions and showed a north-to-south longitudinal slice of the Americas.</div>
                        </div>
                        <div className={"cards mapCard"}>
                            <img src={'/assets/map.png'} style={{backgroundColor: "#EC9A29"}}/>
                            <div className={"cardTitle"}>GDS Map</div>
                            <div className={"cardContent"}>Using Google Data Studio, you can dive into a detailed exploration of the data by date, country, latitude, and longitude. We can see another view of the four-zones concept and the longitudinal slice of the Americas.</div>
                        </div>
                        <div className={"cards modelingCard"}>
                            <img src={'/assets/modeling.png'} style={{backgroundColor: "#A8201A"}}/>
                            <div className={"cardTitle"}>Modeling</div>
                            <div className={"cardContent"}>See early work of a compartmental network model of the virus spread and a Fourier-based analysis of the reported cases across the world.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (

        <div className={"homebody bodyMarginTop"}>
            <ShowTitle/>
            <Introduction/>
            <MainTableau/>
            <MainInfo/>
            <EndSection/>
        </div>
    )
}

export default Home;
