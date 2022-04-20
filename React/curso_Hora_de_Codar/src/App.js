import './App.css';

function App() {
 const nome = "Natan";
 const test = "Gomes";
 function sum (n1,n2){return n1+n2}

  return (
    <div className="App">
      <h1>Ola React, Eis me aqui!</h1>
      <p>Vamos começar a estudar {nome+" "+test}</p>
      <span>Retorno da Func: {sum(2,3)}</span>
      
    </div>
  );
}

export default App;
