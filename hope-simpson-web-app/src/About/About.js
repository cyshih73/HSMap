import React from "react";
import './About.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
    <div>
      <Slide easing="ease" {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
          </div>
        </div>
      </Slide>
    </div>
  )
};

function About() {
  return (
    <div className="about-container container">
      <h1 className="text-center">About the Hope-Simpson Concept</h1>
      <hr/>
      { Slideshow() }
    </div>
  );
}

export default About;
