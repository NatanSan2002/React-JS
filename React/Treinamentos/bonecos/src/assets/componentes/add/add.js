import style from "./add.module.css";
import {useState} from "react";

import Toys from "../lists/toys";
import Container from "../container/container";
import Ordenar from "../../functions/ordenar";

function Add(){

const [name,Setname] = useState();
const [price,Setprice] = useState();
const [ano,Setano] = useState();
const [raridade,Setraridade] = useState();

function Enviar(e,n,p,a,r,list){
e.preventDefault();
list.push({nome:n,price:p,ano:a,rar:r})
return(
list.map((i) => <Container> <p>{i.name}</p></Container>)
)

} 

return(
<section className={style.container}>

<p className={style.tl}>Adicione Um Boneco</p>

<div className={style.flex}> 
<div>
<div>Nome:<input type="text" onChange={(e) => Setname(e.target.value)}/></div>
<div>Preço:<input type="text" onChange={(e) => Setprice(e.target.value)}/></div>
<div>Ano:<input type="text" onChange={(e) => Setano(e.target.value)}/></div>
</div>
<div>
<div>Raridade:<input type="text" onChange={(e) => Setraridade(e.target.value)}/></div>
<div>Imagem:<input type="text" onChange=""/></div>


</div>
</div>

<button type="button" onClick={(e) => Enviar(e,name,price,ano,raridade,Toys)}> OK </button>

</section>
)
}

export default Add;