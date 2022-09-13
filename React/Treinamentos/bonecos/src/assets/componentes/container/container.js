import style from "./container.module.css";

function Container (props) {
return(
<section className={style.container}>
<p> {props.title} </p>
<div className={style.flex}>
{props.children} 
</div>
</section>
)
}

export default Container;