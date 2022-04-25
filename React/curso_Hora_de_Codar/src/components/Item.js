import PTypes from "prop-types";



function Item ({marca,ano_lancamento}) {
return (

<>
<li>
    {marca} {ano_lancamento}
    </li>
</>

)    
}

Item.propTypes = {
marca: PTypes.string.isRequired,
ano_lancamento: PTypes.number
}

Item.defaultProps = {
marca: "Faltou a Marca",
ano_lancamento: 0 
}



export default Item; 