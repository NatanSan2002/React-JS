import style from "./container.module.css";

function Container (props) {
return(
<section className={style.container}>
{props.children} 
</section>
)
}

export default Container;