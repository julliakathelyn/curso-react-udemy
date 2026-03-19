import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CardDetails from './components/CardDetails';

function App() {

  const name = "Joaquim"
  const [userName] = useState("Maria")

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
    </div>
  );
}

export default App;
