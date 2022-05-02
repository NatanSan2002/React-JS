import Button from "./evento/Button.js"

function Evento() {

function meuEvento() {
console.log( `Activaded Firts Event`);
};

function Evento2() {
console.log(`Activaded Second Evento`)
}




return(
<div>
<p> Click Here for Activaded A Event</p>
<Button event={meuEvento} text="Primeiro Botão"/>
<Button event={Evento2} text="Segundo Botão"/>

</div>
)    
}


export default Evento;