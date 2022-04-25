import './App.css'; 
import Evento from "./components/Evento.js";
import Formulario from "./components/Form.js";




function App() {
 


  return (
    <div className="App">
      <h1> Testando Eventos</h1>
      <Evento/>

      <p>Componente: Formulario (Evento)</p>
      <Formulario/>

      
    </div>
  );
}

export default App;
