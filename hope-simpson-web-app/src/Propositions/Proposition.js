import React from 'react';
import './Propositions.css';

const Proposition = (props) => {
  const { title, description, explanations, images, subtitles } = props;
  return (
    <div>
      <h3 className={'propositionDesc'}>{description}</h3>
      <div className={'propositionExplain'}>
        {explanations.map((explanation, eidx) => {
          return (
            <div>
              <span className={'prop-exp'} key={eidx}>{'- ' + explanation.key}</span>
              <ul>
                {explanation.sup.map((support, sidx) => {
                  return (
                    <li key={sidx}>{support}</li>
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
            <figure className="position-relative">
              <figcaption className={'image-subtitles'} key={idx}>{image.title}</figcaption>
              <img className={'img-thumbnail'} key={idx} src={require('' + image.src)} />
            </figure>
          )
        })}
      </div >
    </div>
  )
}

export default Proposition;
