// exemplo de comentario em JSX
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">

      {/* Comentário em JSX */}
      {/* os comentarios em JSX nao vazam para o usuario, ou seja, nao aparecem no console do navegador */}
      
       <h1>Fundamentos React</h1>
       <FirstComponent />
       <p>É padrão que os elementos sejam envolvidos por uma div</p>
       <p>Não podemos usar apenas class, devemos usar className isso vai dar erro no console</p>

      <TemplateExpressions />
    </div>
  );
}

export default App;
