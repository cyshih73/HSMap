import React, { useState } from 'react';
import propositions from './propositionsDatabse'
import Proposition from './Proposition';

const Propositions = () => {
  let [currentView, changeView] = useState(0);
  const pressTab = (index) => {
    changeView(index);
  }

  return (
    <div className={'bodyMarginTop'}>
      <div className={'customTab3'}>
        {
          propositions.map((data, idx) => {
            return <div key={idx} className={(idx == currentView) ? 'tabPressed' : 'tabUnPressed'} onClick={() => {
              pressTab(idx)
            }}><span>{data.title}</span></div>
          })
        }
      </div>
      <div className={'topLine'}>
        <hr />
      </div>
      <div>
        {
          propositions && propositions.map((proposition, idx) => {
            return idx === currentView
              ? <Proposition
                title={proposition.title}
                description={proposition.description}
                explanations={proposition.explanations}
                images={proposition.images}
                key={idx} />
              : <span></span>;
          })
        }
      </div>
    </div>
  )
}

export default Propositions
