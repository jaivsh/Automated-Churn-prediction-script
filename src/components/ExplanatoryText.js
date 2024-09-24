import React from 'react';
import './ExplanatoryText.css';

function ExplanatoryText({ learningRate, batchSize, modelType }) {
  return (
    <div className="explanatory-text">
      <h3>Explanation</h3>
      <p><strong>Learning Rate:</strong> A smaller learning rate makes the model learn slowly and steadily. A higher rate may cause unstable training.</p>
      <p><strong>Batch Size:</strong> {batchSize || 32} data points are processed at each iteration. Larger batch sizes make training faster, but may require more memory.</p>
      <p><strong>Model Type:</strong> You have selected {modelType.replace('_', ' ')}.</p>
    </div>
  );
}

export default ExplanatoryText;
