import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CardDetails from './components/CardDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {

  const name = "Joaquim"
  const [userName] = useState("Maria")


  const cars = [
    { id: 1, brand: "FerrariLindo", color: "Amarelo", km: 0, newCar: true },
    { id: 2, brand: "RenaultLindo", color: "Branco", km: 50000, newCar: false },
    { id: 3, brand: "FiatLindo", color: "Vermelho", km: 100000, newCar: false }
  ];

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
      <ListRender/>
      <ConditionalRender />
      <ShowUserName name="Jullia" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />


      <CardDetails brand="BMW" km={100000} color="Azul" newCar={false}/>
      <CardDetails brand="Audi" km={0} color="Preto" newCar={true} />

      {/* Looop array de objs*/}
      {cars.map((car) => (
      <CardDetails 
      branc={car.brand} 
      color={car.brand} 
      km={car.km} 
      newCar={car.newCar}
      />
      ))}

      <Fragment  />
 
      {/* children*/}
      <Container myValue="testando">
        <p>este e o conteudo</p>
      </Container>


    </div>
  );
}

export default App;
