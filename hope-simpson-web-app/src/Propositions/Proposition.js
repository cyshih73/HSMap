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
              <span className={'prop-exp'}>{explanation.key}</span>
              <ul>
                {explanation.sup.map((support) => {
                  return (
                    <li key={support}>{support}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <br></br>
      </div>
      <div className={'test'}>
        <div className={'propositionDiv'}>
          {images.map((image, idx) => {
            return (
              <figure className={"image-block"} key={idx}>
                <figcaption className={'image-subtitles'}>{image.title}</figcaption>
                <img className={'img-thumbnail'} src={require('./database' + image.src)} />
              </figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Proposition;
