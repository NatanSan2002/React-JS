function Saudacao({nome}){

function gerarSaudacao(qlqNome){
return `Olá SR: ${qlqNome}. Tudo Bem?`;

}

    return (
<>
{nome && (<p><strong>{gerarSaudacao(nome)}</strong></p>)}
</>
)
}

export default Saudacao