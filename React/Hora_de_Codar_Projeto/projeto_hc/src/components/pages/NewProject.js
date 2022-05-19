import style from "./NewProject.module.css";
import ProjectForm  from "../Project/ProjectForm.js";
import {useHistory} from "react-router-dom";

function NewProject() {

    const history = useHistory();

    function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http:/localhost:5000/projects", {
    method: "POST",
    headers:{
    "Content-type": "application/json"
    },
    body: JSON.stringify(project),
    }).then((resp) => resp.json )
    .then(
        (data) => console.log(data)
        //redirect
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