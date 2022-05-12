import style from "./Select.module.css";

function Select({text, name, options, handleOnChange, value}) {
return(
<div className={style.form_control}>
<label htmlFor={name}> {text}</label>
<select name={name} id={name}>
    <option> Select a Option</option>
</select>
</div>
)
}

export default Select; 