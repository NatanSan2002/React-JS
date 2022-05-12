import style from "./NewProject.module.css";
import ProjectForm  from "../Project/ProjectForm.js";

function NewProject() {
    return (
    <div className={style.container}>
        <h1>Make Project</h1>
        <p>Make your project for after add your services </p>
       
       <ProjectForm btnText="Criar Projeto"/>
    </div>
    )
    }
    
    
    export default NewProject;