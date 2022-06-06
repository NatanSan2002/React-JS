import style from "./EditProject.module.css";

import Input from "../form/input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton";
import Loading from "./layout/Loading.js";
import Container from "./layout/Container";

import {useState,useEffect} from "react";

import {useParams} from "react-router-dom";


function EditProject(){

const {id} = useParams(); console.log(id)

const [project,setProject] = useState([]);

const [show,setShow] = useState(false);




useEffect( () => {
setTimeout( () => {
fetch(`http://localhost:5000/projects/${id}`,{
method: "GET",headers:{"Content-Type": "application/json"}
}).then( (r) => r.json() )
.then( (d) =>  {setProject(d)
console.log(d)
}).catch(erro => console.log(erro))},150)},[id]
)

function toggleProjectForm() {
setShow(!show);
}






return(
<>
{project.name ? (
<div className={style.project_details}>
<Container customClass="column">
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
<p>Form</p>
</div>)}
</div>
</Container>
</div>
    
    ) : (<Loading/>)}
</>

)
}


export default EditProject;