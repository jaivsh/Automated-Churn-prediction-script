import React, { useState } from 'react';
import ModelParamsForm from '../components/ModelParamsForm';
import AccuracyGraph from '../components/AccuracyGraph';
import ExplanatoryText from '../components/ExplanatoryText';
import './Home.css';

function Home() {
  const [params, setParams] = useState({});
  const [accuracyData, setAccuracyData] = useState([0.6, 0.7, 0.8, 0.9]);

  const handleParamsChange = (newParams) => {
    setParams(newParams);
    // Mock: Update accuracyData based on model type (for demo purposes)
    setAccuracyData([0.6, 0.7, 0.85, 0.9]);
  };

  return (
    <div className="home-container">
      <h1>Automated Model Selection for Regression and Classification</h1>
      <ModelParamsForm onParamsChange={handleParamsChange} />
      <AccuracyGraph dataPoints={accuracyData} />
      <ExplanatoryText
        learningRate={params.learningRate}
        batchSize={params.batchSize}
        modelType={params.modelType}
      />
    </div>
  );
}

export default Home;
