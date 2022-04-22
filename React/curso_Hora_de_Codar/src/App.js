import './App.css'; 
import SayName from "./components/SayMyName.js";
import Pessoa from "./components/Pessoa.js";
import Frase from "./components/Frase.js"



function App() {
 


  return (
    <div className="App">
      <p>Componente SayMyName:</p>
      <SayName nome="N4T4N"/>
      <SayName nome="Joao"/>
      <br>
      </br>
      <p>Componente Pessoa</p>
      <Pessoa nome="Roberto" idade="25" profissao="Limpador de Vidros" foto="https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/01/goku.jpeg"/>

      <p>Componente Frase</p>
      <Frase />
     
      
    </div>
  );
}

export default App;
