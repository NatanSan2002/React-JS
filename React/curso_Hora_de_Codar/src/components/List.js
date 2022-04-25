import Item from "./Item.js";

function List () {
return (
<>
<h1>Minha Lista</h1>
<ul>
<Item marca="Fiat" ano_lancamento={1998}/>
<Item marca="GOL" ano_lancamento={2005}/>
<Item marca="Pegueot" ano_lancamento={1940}/>
</ul>
</>

)
}

export default List 