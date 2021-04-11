import React, {Component, useState} from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';


class Navbar extends Component{
    constructor() {
        super();
        this.state={
            navOpen: false
        }
    }
    openNav=()=>{
        this.setState({...this.state,navOpen: true})
    }
    closeNav=()=>{
        this.setState({...this.state,navOpen: false})
    }
    render(){
        return (
            <div className={"customNavBar"}>
                <div className={"links"} style={this.state.navOpen?{left:"0px"}:{left: "-100%"}}>

                    <div className={"closeNav"} onClick={this.closeNav}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={"linksDiv"}>
                        <a href={"/"}><div>Home</div></a>
                        <a href={"/about"}><div>About</div></a>
                        <a href={"/map/tableau"}><div>Tableau Map</div></a>
                        <a href={"/map/gds"}><div>GDS Map</div></a>
                        <a href={"/modeling"}><div>Modeling</div></a>
                        <a href={"/team"}><div>Team</div></a>
                    </div>
                </div>
                <div className={"hamburger"} onClick={this.openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Navbar;
