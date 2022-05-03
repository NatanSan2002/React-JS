import './App.css'; 
import OutraLista from './components/OutraLista';


const MyItens = ["React","Vue", "Angular"];
const Itens2 = [];



function App() {
 


  return (
    <div className="App">
     <p>Componente: (Outra) Lista </p>
     <OutraLista itens={MyItens} />
     <p> Lista Vazia:</p>
     <OutraLista itens={Itens2}/>
     
    

      
    </div>
  );
}

export default App;
