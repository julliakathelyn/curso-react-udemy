import logo from './logo.svg';
import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Desafio 3</h1>
      {/* Imagem em public */}
      {/* imagens da pasta public podem ser acessadas diretamente usando a /nomedaimg.blabla */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* imagem em assets*/}
      {/* imagem em assets precisam ser importadas */}
      <div>
        <img src={City} alt="" />
      </div>

      <ManageData />
    </div>
  );
}

export default App;
