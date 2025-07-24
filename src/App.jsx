
import React, { useState } from 'react';
import GachaButton from './components/GachaButton';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [result, setResult] = useState(null);

  const handleGacha = () => {
    // TODO: APIからガチャの結果を取得する
    const gachaResult = Math.random() < 0.1 ? 'S' : 'A'; // 仮実装
    setResult(gachaResult);
  };

  return (
    <div>
      <h1>ガチャ</h1>
      <GachaButton onClick={handleGacha} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
