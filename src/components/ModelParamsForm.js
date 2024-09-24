import React, { useState } from 'react';
import './ModelParamsForm.css';

function ModelParamsForm({ onParamsChange }) {
  const [learningRate, setLearningRate] = useState(0.01);
  const [batchSize, setBatchSize] = useState(32);
  const [modelType, setModelType] = useState('logistic_regression');

  const handleSubmit = (e) => {
    e.preventDefault();
    onParamsChange({ learningRate, batchSize, modelType });
  };

  return (
    <form className="params-form" onSubmit={handleSubmit}>
      <div className="param">
        <label>Learning Rate:</label>
        <input
          type="range"
          min="0.001"
          max="0.1"
          step="0.001"
          value={learningRate}
          onChange={(e) => setLearningRate(e.target.value)}
        />
        <span>{learningRate}</span>
      </div>

      <div className="param">
        <label>Batch Size:</label>
        <input
          type="number"
          value={batchSize}
          onChange={(e) => setBatchSize(e.target.value)}
        />
      </div>

      <div className="param">
        <label>Model Type:</label>
        <select value={modelType} onChange={(e) => setModelType(e.target.value)}>
          <option value="logistic_regression">Logistic Regression</option>
          <option value="random_forest">Random Forest</option>
          <option value="svm">SVM</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">Run Model</button>
    </form>
  );
}

export default ModelParamsForm;
