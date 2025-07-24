import React from 'react';

const GachaButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      ガチャを引く
    </button>
  );
};

export default GachaButton;
