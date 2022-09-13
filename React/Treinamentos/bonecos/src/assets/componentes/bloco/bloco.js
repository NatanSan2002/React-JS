import style from "./bloco.module.css";

function Bloco ({name,ano,raridade,price,img}) {



     var r = raridade.toLowerCase();
return(

<div className={style.container}>
<p className={style.name}>{name} </p>

<div className={`${style.carac} ${r == "alta" ? style.raro : style.normal } `}>
<p>Ano: {ano}</p>
<p>Raridade: {raridade}</p>

</div>

{img && (<img src={require("../../imgs/bonecos/"+img)} alt="Imagem Do Boneco"/>)}

<p className={style.price}>{price}R$</p>

</div>

)
}

export default Bloco;