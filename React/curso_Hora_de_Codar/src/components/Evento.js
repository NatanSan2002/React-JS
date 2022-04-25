function Evento() {

function meuEvento() {
console.log( `Evento do Botao foi Ativado com sucesso!!!`);
};




return(
<div>
<p> Click Here for Activaded A Event</p>
<input type="button" onClick={meuEvento} value="Click Aqui!!!" />
</div>
)    
}


export default Evento;