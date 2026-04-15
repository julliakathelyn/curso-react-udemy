import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';

const cars = [
  { marca: 'Fiat', modelo: 'Uno', cor: 'Prata' },
  { marca: 'Chevrolet', modelo: 'Onix', cor: 'Preto' },
  { marca: 'Volkswagen', modelo: 'Gol', cor: 'Branco' }
]

function App() {
  return (
    <div className="App">
      <h1>Desafio 5 - CSS</h1>
      {cars.map((car, index) => (
        <CarDetails key={index} marca={car.marca} modelo={car.modelo} cor={car.cor} />
      ))}
      
    </div>
  );
}

export default App;
