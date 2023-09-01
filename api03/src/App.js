import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchKanyeQuote = async () => {
    try {
      const response = await fetch('https://api.kanye.rest');
      if (!response.ok) throw new Error('Erro na requisição');
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Erro:', error);
      setQuote('Não foi possível obter uma citação.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Citação do Kanye West</h1>
        <button onClick={fetchKanyeQuote}>Obter Citação</button>
        <p>{quote}</p>
      </header>
    </div>
  );
}

export default App;
