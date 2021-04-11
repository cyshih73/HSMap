import React from "react";
import './Team.css';

function Profile({ name, avatar, title, organization, roles, link }) {
    return (
        <div className={"eachProfile"}>
            <div class={"profileInner"}>
                <div className={"profileFront"}>
                    <div className={"profileAvatar"}>
                        <img src={avatar}/>
                    </div>
                    <div className={"profileFrontName"}>{name}</div>
                </div>
                <div className={"profileBack"}>
                    <div className={"profileBackName"}>{name}</div>
                    <div className={"profileInfo"}>
                        <div>{title}</div>
                        <div>{organization}</div>
                    </div>
                    <div className={"profileRoles"}>
                        {
                            roles.map((role,index)=>
                                <div key={index}>{role}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
