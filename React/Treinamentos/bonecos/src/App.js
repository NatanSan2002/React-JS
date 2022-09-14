
import Container from "./assets/componentes/container/container.js";
import Add from "./assets/componentes/add/add.js";

import Toys from "./assets/componentes/lists/toys.js";
import Ordenar from "./assets/functions/ordenar.js"; // (array,attr,comparision,num/attr,funcão)


function App() {

  const maior = "maior";
  const menor = "menor";
  const igual = "igual";

  const ordem = "ordem";
  const filtrado = "filter"

  let toys = Toys;

  toys.map( (i) => i.price =  i.price.replace("R$", "") )
  
   


  return (
    <>
  <h1> Bonecos </h1>
  <hr></hr>

  <Add/>

  <Container title="Mais caros">

{Ordenar(toys,"price",maior,200,ordem)}

</Container>

<Container title="Mais Baratos">
  
{Ordenar(toys,"price",menor,300,ordem)}

</Container>

<Container title="Promoções">
  
{Ordenar(toys,"price",menor,300,filtrado)}

</Container>

<Container title="Raros">
  
{Ordenar(toys,"rar",igual,"Alta",filtrado)}

</Container>

<Container title="Antiguidades">
  
{Ordenar(toys,"ano",menor,0,ordem)}

</Container>






    </>
  );
}

export default App;
