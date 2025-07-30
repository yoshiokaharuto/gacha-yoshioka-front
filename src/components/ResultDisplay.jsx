import React from 'react';

const ResultDisplay = ({ result, className }) => {
  const getRankClass = (rank) => {
    if (!rank) return '';
    return `rank-${rank.toLowerCase()}`;
  };

  return (
    <div className={className}>
      {result ? (
        <p>
          結果: <span className={getRankClass(result)}>{result}</span>
        </p>
      ) : (
        '結果はここに表示されます'
      )}
    </div>
  );
};

export default ResultDisplay;
