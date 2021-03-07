import React from "react";
import './Team.css';

function Profile({ name, avatar, title, organization, roles, link }) {
  return (
      <div className="card shadow bg-light mt-4 mb-4">
        <div className="card-img-top text-center">
          {
            link && link.length > 0
              ? <a href={ link } target="_blank" rel="noopener noreferrer">
                  <img className="card-img-top team-profile-avatar rounded-circle" src={ avatar } alt=""/>
                </a>
              : <img className="card-img-top team-profile-avatar rounded-circle" src={ avatar } alt=""/>
          }
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">{ name }</h4>
          <div className="card-subtitle mb-2 text-muted">{ title }</div>
          <div className="card-subtitle mb-2 text-muted">{ organization }</div>
          {
            roles && roles.map((role, index) =>
              <div className="badge badge-dark team-profile-description" key={ index }>{ role }</div>)
          }
        </div>
      </div>
  );
}

export default Profile;
