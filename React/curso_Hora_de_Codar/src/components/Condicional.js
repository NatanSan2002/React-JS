import {useState} from "react";

function Condicional () {

const [email,setEmail] = useState();


function enviarEmail(e) {
e.preventDefault();
console.log("Testando Submit Email")
}




return (
<div>
<h2>Cadastre o seu E-mail:</h2>
<form>
<input type="email" placeholder="digite seu email" onChange={(e)=> setEmail(e.target.value)}/>
<button type="submit" onClick={enviarEmail}>Enviar Email</button>
</form>
</div>
)

}


export default Condicional;