
import React, { useState } from 'react';
import axios from 'axios';
import GachaButton from './components/GachaButton';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleGacha = async () => {
    try {
      const response = await axios.get('/api/gacha');
      setResult(response.data.result);
    } catch (error) {
      console.error('Error fetching gacha result:', error);
      // エラーハンドリングをここに追加
    }
  };

  return (
    <div>
      <h1>ガチャ</h1>
      <GachaButton onClick={handleGacha} className="gacha-button" />
      <ResultDisplay result={result} className="result-display" />
    </div>
  );
}

export default App;
