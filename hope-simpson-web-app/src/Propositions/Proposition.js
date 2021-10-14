import React from 'react';
import './Propositions.css';

const Proposition = (props) => {
  const { title, description, images, subtitles } = props;
  return (
    <div className={'propositionDiv'}>
      {/*<h2 className={"title"}>{title}</h2>*/}
      <p>{description}</p>
      {images.map((image, idx) => {
        // return (
        //   <div>
        //     <img className={'img-fluid'} key={idx} src={require('' + image)} />
        //   </div>
        // )
        return (
          <div className="img-text-wrapper">
            <div className='subtitle' key={idx}>{image.title}</div>
            <div className="logo-wrapper">
              <img className={'img-fluid'} key={idx} src={require('' + image.src)} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Proposition;
