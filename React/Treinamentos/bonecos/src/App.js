import Bloco from "./assets/componentes/bloco/bloco.js";
import Container from "./assets/componentes/container/container.js";
import Toys from "./assets/componentes/lists/toys.js";


function App() {

  let toys = Toys;
  function Organize () {
toys.map( (i) => i.price =  i.price.replace("R$", "") )
toys.map( (i) => Number(i.price)  )

toys = toys.filter( (i) => i.price.includes(0) || i.price > 200 ? true : false )









  } 
 


 

  return (
    <>
  <h1> Bonecos </h1>
  <hr></hr>
  <Container>
{Organize()}

{ 

toys.map( (t) => 
<Bloco name={t.name} ano={t.ano} raridade={t.rar} price={t.price} />
 )

}

</Container>


    </>
  );
}

export default App;
