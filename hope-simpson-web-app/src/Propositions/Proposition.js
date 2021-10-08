import React from 'react';
import './Propositions.css';

const Proposition = (props) => {
  const { title, description, images } = props;
  return (
    <div className={'propositionDiv'}>
      {/*<h2 className={"title"}>{title}</h2>*/}
      <p>{description}</p>
      {images.map((image, idx) => {
        return (
          <div>
            {/*<img className={'img-fluid'} key={idx} src={image}/>*/}
          </div>
        )
      })}
    </div>
  )
}

export default Proposition;
