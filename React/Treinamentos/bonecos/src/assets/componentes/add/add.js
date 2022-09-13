import style from "./add.module.css"

function Add(){
return(
<section className={style.container}>

<p className={style.tl}>Adicione Um Boneco</p>

<div className={style.flex}> 
<div>
<div>Nome:<input type="text" onChange=""/></div>
<div>Preço:<input type="text" onChange=""/></div>
<div>Ano:<input type="text" onChange=""/></div>
</div>
<div>
<div>Raridade:<input type="text" onChange=""/></div>
<div>Imagem:<input type="text" onChange=""/></div>
</div>
</div>

<button type="button"> OK </button>

</section>
)
}

export default Add;