import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import style from "./ProjectForm.module.css";

function ProjectForm({btnText}) {
return(
<form className={style.form}>
    <Input type="text" 
    text="Nome do Projeto:" 
    name="name" 
    placeholder="Insert The Name Of Project"/>
  
<Input type="number" 
    text="Orcamento of Project: " 
    name="budget" 
    placeholder="Insert The Orcamento total"/>
    
<Select name="category_id" text="Select the Category:"/>
<SubmitButton text={btnText}/>
</form>
)
}


export default ProjectForm;