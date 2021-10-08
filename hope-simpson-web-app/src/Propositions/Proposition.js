import React from 'react';
import './Propositions.css';

const Proposition = (props) => {
  const { title, description, images } = props;
  return(
    <div className={"propositionDiv"}>
        <h2 className={"title"}>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Proposition;
