import React from 'react';
import { useParams } from 'react-router-dom';
import './Models.css';
import FourierBasedAnalysis from './FourierBasedAnalysis';
import CompartmentalNetworkModel from "./CompartmentalNetworkModel";
import InteractiveModel from "./InteractiveModel";

function ModelTriage() {
  let { modelId } = useParams();

  return (
    <div className="model-triage-container container">
      { modelId === 'compartmentalnetworkmodel' && <CompartmentalNetworkModel /> }
      { modelId === 'fourierbasedanalysis' && <FourierBasedAnalysis/> }
      { modelId === 'interactivemodel' && <InteractiveModel/>}
    </div>
  )
}

export default ModelTriage;
