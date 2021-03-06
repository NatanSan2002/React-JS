import Message from "./pages/layout/Message.js";
import {useLocation} from "react-router-dom";
import { useState,useEffect } from "react"

import style from "./pages/Projects.module.css";
import Container from "./pages/layout/Container.js";
import Loading from "./pages/layout/Loading.js";
import LinkButton from "./pages/layout/LinkButton.js";


import ProjectCard from "./Project/ProjectCard.js";


function Projects() {

const [msgRemove,setMsgRemove] = useState("");

const [projects,setProjects] = useState([]);

const[removeLoading,setRemoveLoading] = useState(false);

const location = useLocation();
let message = "";
if(location.state){
message = location.state.message;
}

useEffect(() => {
setTimeout(() => {
fetch("http://localhost:5000/projects",
{method: "GET",
headers: {"Content-Type":"application/json"}})
.then( (r) => r.json())
.then( (data) => {setProjects(data)
setRemoveLoading(true)
console.log(data)})
.catch(error => console.log(error))},300)}, [])

function removeProject(id){
fetch(`http://localhost:5000/projects/${id}`,{
method: "DELETE",
headers:{'Content-Type':'application/json',
},
}).then((r) => r.json())
.then((data) => { console.log(data)
setProjects(projects.filter((f) => f.id !== id  ))
setMsgRemove(`Projeto Removido Com Sucesso`)
})
.catch((erro) => console.log(erro));

}



return(
<div className={style.project_container}>
    <div className={style.title_container}>
<h1> My Projects</h1>
<LinkButton to="/newproject" text="Create Project"/>
</div>
{message && (<Message type="success" msg={message}/>)}
{msgRemove && (<Message type="success" msg={msgRemove}/>)}
<Container customClass="start">
{projects.length > 0 && 
projects.map((p) => (
<ProjectCard 
name={p.name} 
id={p.id}
budget={p.budget}
category={p.category.name}
key={p.id}
handleRemove={removeProject}

/>
)
)}
{removeLoading == false && (<Loading/>)}
{removeLoading && projects.length == 0 && (
<p>Not have projects yet</p>
)}
</Container>
</div>
)

}

export default Projects; 