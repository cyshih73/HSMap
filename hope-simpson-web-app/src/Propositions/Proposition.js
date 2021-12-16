import React from 'react';
import './Propositions.css';

const ListEx = (item) => {
  let ex = null;
  if (Array.isArray(item.item) && item.item.length > 0) {
    ex = (
      <ul>
        {item.item.map((support) => <ListEx item={support} key={support} />)}
      </ul>
    );
  }
  else {
    ex = (!Array.isArray(item.item) && item.item !== '') || (Array.isArray(item.item) && item.item.length !== 0) ? (
      <li>
        {item.item}
      </li>
    ) : ''
  }
  return ex;
}

const Proposition = (props) => {
  const { title, description, explanations, images } = props;
  return (
    <div>
      <h3 className={'propositionDesc'}>{title + ': ' + description}</h3>
      <div className={'propositionExplain'}>
        {explanations.map((explanation, eidx) => {
          return (
            <div key={eidx}>
              <span className={'prop-exp'}>{explanation.key}</span>
              {<ListEx item={explanation.sup} />}
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
