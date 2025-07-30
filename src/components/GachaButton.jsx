import React from 'react';

const GachaButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      ガチャを引く
    </button>
  );
};

export default GachaButton;
