import {useEffect, useState} from "react";

import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import style from "./ProjectForm.module.css";




function ProjectForm({handleSubmit,btnText, projectData}) {



const [categories,setCategories] = useState([]);
const [project,setProject] = useState(projectData || {});


useEffect(
    () => {
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            },
            }
            )
            .then((resp) => resp.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error) )
        }, [])


const submit = (e) => {
e.preventDefault();
//console.log(project)
handleSubmit(project);
}

function handleChange(e) {
setProject({...project, [e.target.name]: e.target.value })
}

function handleCategory(e) {
    setProject({...project, category: {
    id: e.target.value,
    name: e.target.options[e.target.selectedIndex].text,
    },})
    }

return(
<form  onSubmit={submit} className={style.form}>
    <Input type="text" 
    text="Nome do Projeto:" 
    name="name" 
    placeholder="Insert The Name Of Project"
    handleOnChange={handleChange}
    value={project.name ? project.name : ""}
    />
  
<Input type="number" 
    text="Orcamento of Project: " 
    name="budget" 
    placeholder="Insert The Orcamento total"
    handleOnChange={handleChange}
    value={project.budget ? project.budget : ""} />
    
<Select name="category_id" text="Select the Category:" options={categories} 
handleOnChange={handleCategory} 
value={project.category ? project.category.id : ""} />
<SubmitButton text={btnText}/>
</form>
)
}


export default ProjectForm;