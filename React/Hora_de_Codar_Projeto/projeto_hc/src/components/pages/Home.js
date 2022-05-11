import style from "./Home.module.css"
import savings from "../../imgs/savings.svg";
import LinkButton from "./layout/LinkButton";

function Home() {
return (
<section className={style.home_container}>
<h1>Bem-vindo ao <span>Costs</span>  </h1>
<p> Comece a Gerenciar seus Projetos agora mesmo!</p>
<LinkButton to="/newproject" text="Criar Projeto"/>
<img src={savings} alt="Costs" srcset="" />
</section>
)
}


export default Home;