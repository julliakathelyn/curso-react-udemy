import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Jullia');
  const redTitle = false;
  
  return (

    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este é um parágrafo estilizado com CSS global.</p>

      {/* CSS inline */}
      <p style={{
        color: 'blue',
        padding: '10px',
        backgroundColor: 'yellow'
      }}
      >este elemento foi estilizado de forma inline</p>

      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? { color: 'red' } : { color: 'green' }}> CSS dinamico </h2>
      <h2 style={n > 10 ? { color: 'red' } : { color: 'green' }}> CSS dinamico </h2>

      <h2 style={name === 'Jullia' ? { color: 'purple', backgroundColor: 'pink' } : null}> Teste nome </h2>

      {/* Classe dinamica */ }

      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>

      {/* CSS Modules */ }
      {/* esse css só funciona a nivel de componente */ }
      <Title />
      <h2 className='my_title'> Testando</h2>

    </div>
  );
}

export default App;
