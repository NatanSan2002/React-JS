import style from "./bloco.module.css";

function Bloco ({name,ano,raridade,price}) {

     var r = raridade.toLowerCase();
return(

<div className={style.container}>
<p className={style.name}>{name} </p>

<div className={`${style.carac} ${r == "alta" ? style.raro : style.normal } `}>
<p>Ano: {ano}</p>
<p>Raridade: {raridade}</p>

</div>

<p className={style.price}>{price}R$</p>

</div>

)
}

export default Bloco;