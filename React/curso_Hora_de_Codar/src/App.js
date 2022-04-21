import './App.css'; 
import HWorld from "./components/HelloWorld.js";
import Fraze from "./components/Frase";

function App() {
 const nome = "Natan";
 const test = "Gomes";
 function sum (n1,n2){return n1+n2}

 const img = "https://via.placeholder.com/150";

  return (
    <div>
      <h1>Ola React, Eis me aqui!</h1>
      <p>Vamos começar a estudar {nome+" "+test}</p>
      <p>Retorno da Func: {sum(2,3)}</p>
      Imagem:<br></br>
      <img src={img} alt="Imagem Teste"/>
      <p>Componente Chamado: </p><HWorld/>
      <p> Outros Componentes Chamados: </p><Fraze/>
      <Fraze/>
    </div>
  );
}

export default App;
