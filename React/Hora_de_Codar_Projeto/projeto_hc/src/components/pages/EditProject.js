import style from "./EditProject.module.css";

import Input from "../form/input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton";
import Loading from "./layout/Loading.js";
import Container from "./layout/Container";
import ProjectForm from "../Project/ProjectForm.js"
import Message from "../pages/layout/Message.js";

import {useState,useEffect} from "react";

import {useParams} from "react-router-dom";


function EditProject(){

const {id} = useParams(); console.log(id)

const [project,setProject] = useState([]);

const [show,setShow] = useState(false);

const [showServiceForm,setShowServiceForm] = useState(false);

const [msg,setMsg] = useState();

const [type,setType] = useState();




useEffect( () => {
setTimeout( () => {
fetch(`http://localhost:5000/projects/${id}`,{
method: "GET",headers:{"Content-Type": "application/json"}
}).then( (r) => r.json() )
.then( (d) =>  {setProject(d)
console.log(d)
}).catch(erro => console.log(erro))},150)},[id]
)

function editPost(project) {
setProject("");
if(project.budget < project.cost ){
setMsg("Erro: Gasto menor do que o Orçamento"); setType("error");
return false;
};


fetch(`http://localhost:5000/projects/${project.id}`, {
method: "PATCH", headers: {"Content-Type":"application/json"},
body: JSON.stringify(project)
})
.then(r => r.json())
.then(d => {setProject(d) 
setShow(false)
setMsg("Projeto Editado com Sucesso!")
setType("success")})
.catch(error => console.log(error))

}


function toggleProjectForm() {
setShow(!show);
}

function toggleServiceForm() {
  setShowServiceForm(!showServiceForm);
  }






return(
<>
{project.name ? (
<div className={style.project_details}>
<Container customClass="column">
{msg && (<Message type={type} msg={msg}/>)}
<div className={style.details_container}>
<h1>Projeto: {project.name}</h1>
<button className={style.btn} onClick={toggleProjectForm}>{
show == false ? "Editar Projeto" : "Ocultar Projeto"}</button>
{show == false ? (
<div className={style.project_info}> 
    <p>
  <span>Categoria: </span>{project.category.name}
    </p>
    <p>
    <span>Total de Orçamento: </span>R${project.budget}
        </p>
        <p>
        <span>Total Utilizado: </span>R${project.cost}    
        </p>
        
</div>
) : 
(<div className={style.project_info}> 
<ProjectForm handleSubmit={editPost} projectData={project} btnText="Salvar Alteraçoes"/>
</div>)}
</div>


</Container>
</div>
    
    ) : (<Loading/>)}

</>

)
}


export default EditProject;