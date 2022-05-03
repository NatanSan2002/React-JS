import {useState} from "react";

function Condicional () {

const [email,setEmail] = useState();
const [userEmail,setUserEmail] = useState();

function enviarEmail(e) {
e.preventDefault();
setUserEmail(email);
console.log(userEmail);

}

function LimparEmail() {
setUserEmail("");

}




return (
<div>
<h2>Cadastre o seu E-mail:</h2>
<form>
<input type="email" placeholder="digite seu email" onChange={(e)=> setEmail(e.target.value)}/>
<button type="submit" onClick={enviarEmail}>Enviar Email</button>
</form>

{userEmail && (
<div>
<p>Email registrado com sucesso: {userEmail}</p>
<input type="button" value="Clean" onClick={LimparEmail}/>
</div>
)}


</div>
)

}


export default Condicional;