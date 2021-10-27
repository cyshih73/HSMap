import React from 'react';
import './Propositions.css';

const Proposition = (props) => {
  const { title, description, explanations, images, subtitles } = props;
  return (
    <div>
      <h3 className={'propositionDesc'}>{title + ': ' + description}</h3>
      <div className={'propositionExplain'}>
        {explanations.map((explanation, eidx) => {
          return (
            <div key={eidx}>
              <span className={'prop-exp'}>{'- ' + explanation.key}</span>
              <ul>
                {explanation.sup.map((support) => {
                  return (
                    <li>{support}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className={'propositionDiv'}>
        {/* <h2 className={"title"}>{title}</h2> */}
        {/* <h3 className={'propositionDesc'}>{description}</h3> */}
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
            <figure className="position-relative" key={idx}>
              <figcaption className={'image-subtitles'}>{image.title}</figcaption>
              <img className={'img-thumbnail'} src={require('./database' + image.src)}/>
            </figure>
          )
        })}
      </div>
    </div>
  )
}

export default Proposition;
