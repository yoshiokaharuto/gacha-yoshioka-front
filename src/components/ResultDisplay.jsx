import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div>
      {result && <p>結果: {result}</p>}
    </div>
  );
};

export default ResultDisplay;
