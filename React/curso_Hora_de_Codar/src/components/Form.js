function Form () {

function cadastrarUser() {
console.log("Usuario Cadastrado!!!")
}





return(
<div>
<h1> Meu Cadastro</h1>
<form onSubmit={cadastrarUser}>
<div>
<input type="text" placeholder="Digite o Seu Nome"/>
</div>
<div>
<input type="submit" value="Cadastrar"/>    
</div>
</form>
</div>

)

}



export default Form; 