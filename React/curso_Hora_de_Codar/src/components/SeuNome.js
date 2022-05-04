function SeuNome({Nome}) {
return (
<div>
<p>Digite seu Nome:</p>
<input type="text" placeholder="Qual é o seu nome?" onChange={(e) => Nome(e.target.value)}/>
</div>
)
}

export default SeuNome;