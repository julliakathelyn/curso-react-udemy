import MyForm from './components/MyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulário</h1>
      <MyForm user={{name: "Ju" , email: "ju@example.com", bio: "Sou uma programadora", role: "admin"}} />
    </div>
  );
}

export default App;
