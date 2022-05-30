import style from "./NewProject.module.css";
import ProjectForm  from "../Project/ProjectForm.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import Loading from "../pages/layout/Loading.js";

function NewProject() {

const [rmvLoading,setRMVLoading] = useState();

    const navigate = useNavigate();

    function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    setRMVLoading(false);

    setTimeout( () => {fetch("http://localhost:5000/projects", {
    method: "POST",
    headers:{
    "Content-type": "application/json"
    },
    body: JSON.stringify(project),
    })
    .then((resp) => resp.json() )
    .then(
        (data) => {console.log(data)
        setRMVLoading(true)
            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })}
        
    )
    .catch(err => console.log(err));}
    ,1000)}

    return (
    <div className={style.container}>
        <h1>Make Project</h1>
        <p>Make your project for after add your services </p>      
       <ProjectForm  handleSubmit={createPost}btnText="Criar Projeto"/>
       {rmvLoading == false && (
           <div><Loading/></div>
       )}
    </div>
    )
    }
    
    
    export default NewProject;