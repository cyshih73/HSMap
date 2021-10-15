import React from 'react';
import './Propositions.css';

const Proposition = (props) => {
  const { title, description, images, subtitles } = props;
  return (
    <div className={'propositionDiv'}>
      {/*<h2 className={"title"}>{title}</h2>*/}
      {/* <p>{description}</p> */}
      {images.map((image, idx) => {
        // return (
        //   <div>
        //     <img className={'img-fluid'} key={idx} src={require('' + image)} />
        //   </div>
        // )
        return (
          // <div className="img-text-wrapper">
          //   <div className='image_subtitle' key={idx}>{image.title}</div>
          //   <div className="logo-wrapper">
          //     <img className={'img-fluid'} key={idx} src={require('' + image.src)} />
          //   </div>
          // </div>
          <figure className="position-relative">
            <figcaption className={'image-subtitles'} key={idx}>{image.title}</figcaption>
            <img className={'img-thumbnail'} key={idx} src={require('' + image.src)} />
          </figure>
        )
      })}
    </div>
  )
}

export default Proposition;
