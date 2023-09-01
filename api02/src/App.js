import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState(null);
  const apiUrl = 'https://api.chucknorris.io/jokes/random';

  const fetchChuckNorrisJoke = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Erro na requisição');
      const data = await response.json();
      setJoke(data.value);
      setError(null);
    } catch (error) {
      setError('Erro na requisição');
    }
  };

  useEffect(() => {
    fetchChuckNorrisJoke();
  }, []);

  return (
    <div className="App">
      <h1>Piada do Chuck Norris</h1>
      <p>{error ? error : joke}</p>
      <button onClick={fetchChuckNorrisJoke}>Obter Piada</button>
    </div>
  );
}

export default App;
