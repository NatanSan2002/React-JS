import style from "./NewProject.module.css";
import ProjectForm  from "../Project/ProjectForm.js";
import {useNavigate} from "react-router-dom";

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
    method: "POST",
    headers:{
    "Content-type": "application/json"
    },
    body: JSON.stringify(project),
    })
    .then((resp) => resp.json() )
    .then(
        (data) => {console.log(data)
            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })}
        
    )
    .catch(err => console.log(err));
    }

    return (
    <div className={style.container}>
        <h1>Make Project</h1>
        <p>Make your project for after add your services </p>      
       <ProjectForm  handleSubmit={createPost}btnText="Criar Projeto"/>
    </div>
    )
    }
    
    
    export default NewProject;