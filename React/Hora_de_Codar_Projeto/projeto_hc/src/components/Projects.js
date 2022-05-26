import Message from "./pages/layout/Message.js";
import {useLocation} from "react-router-dom";
import { useState,useEffect } from "react"

import style from "./pages/Projects.module.css";
import Container from "./pages/layout/Container.js";
import LinkButton from "./pages/layout/LinkButton.js";

import ProjectCard from "./Project/ProjectCard.js";


function Projects() {

const [projects,setProjects] = useState([]);

useEffect(
() => {fetch("http://localhost:5000/projects",
{method: "GET",
headers: {"Content-Type":"application/json"}})
.then( (r) => r.json())
.then( (data) => {setProjects(data)
console.log(data)})
.catch(error => console.log(error))}, [])

const location = useLocation();
let message = "";
if(location.state){
message = location.state.message;
}

return(
<div className={style.project_container}>
    <div className={style.title_container}>
<h1> My Projects</h1>
<LinkButton to="/newproject" text="Create Project"/>
</div>
{message && (<Message type="success" msg={message}/>)}
<Container customClass="start">
    <p>Projetos</p>
</Container>
</div>
)

}

export default Projects; 