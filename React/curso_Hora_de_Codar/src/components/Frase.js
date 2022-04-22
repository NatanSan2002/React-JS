import estilo from "./styles/Frase.module.css";

function Frase () {

return(
<div className={estilo.fraseContainer}>
<p className={estilo.fraseContent}>Este é um Componente que emite <strong> Frases</strong></p>
</div>

)


}

export default Frase;

