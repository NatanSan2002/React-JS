import style from "./EditProject.module.css";

/*Importar todo o Project Form Ou Não?? */

function EditProject(){
return(
<div className={style.principal}>
<h1>Editar Projeto</h1>

<div className={style.edit_div}>
<div className={style.adjust}>
<section>
<p>Name Of Project:</p>
<input type="text" placeholder="Edit Name of Project"></input>
</section>
<section>
<p>Orçamento Of Project:</p>
<input type="number" placeholder="Chose the Orçamento"></input>
</section>
<section>
<p>Name Of Project:</p>
<input type="text" placeholder="Edit Name of Project"></input>
</section>
</div>

</div>
</div>
)
}


export default EditProject;