import React, { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Erro ao obter os dados da API');
      }
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setError('Erro na requisição');
    }
  };

  return (
    <div className="App">
      <h1>Conselho do Dia</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>{advice}</p>
      )}
      <button onClick={fetchAdvice}>Obter Conselho</button>
    </div>
  );
}

export default App;