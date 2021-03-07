import React from "react";
import './Team.css';
import Profile from "./Profile";
import profiles from "./ProfileDatabase";

const RICE_IMAGE_PATH = '/assets/rice.jpg';

function Team() {

  // Sort names alphabetically except Professor Simar
  // const profileList = [
  //   ...profiles.slice(0, 1),
  //   ...profiles.slice(1)
  //     .sort((a, b) => (a.name > b.name) ? 1 : -1)];
  const profileList = [...profiles];

  return (
    <div>
      <img src={ RICE_IMAGE_PATH } alt="" className="img-fluid"/>
      <div className="team-container container">
        <div className="row justify-content-center">
          {
            profileList && profileList.map((profile, index) =>
              <div className="col-md-6 col-lg-4 card-deck" key={ index }>
                <Profile
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
        </div>
      </div>
    </div>
  );
}

export default Team;
