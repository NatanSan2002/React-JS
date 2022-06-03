import style from "./EditProject.module.css";

import Input from "../form/input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton";

import {useState,useEffect} from "react";

import {useParams} from "react-router-dom";

function EditProject(){

const {id} = useParams(); console.log(id)

const [project,setProject] = useState([]);




useEffect( () => {
fetch(`http://localhost:5000/projects/${id}`,{
method: "GET",headers:{"Content-Type": "application/json"}
}).then( (r) => r.json() )
.then( (d) =>  {setProject(d)
console.log(d)
}).catch(erro => console.log(erro))},[id]
)

/*colocar efeito de loading*/






return(
<div className={style.principal}>
<p>Projeto de id: {id}</p>
</div>

)
}


export default EditProject;