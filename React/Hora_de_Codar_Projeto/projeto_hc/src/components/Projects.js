import Message from "./pages/layout/Message.js";
import {useLocation} from "react-router-dom";


function Projects() {

const location = useLocation;
let message = "";
if(location.state){
message = location.state.message;
}

return(
<div>
<h1> My Projects</h1>
{message && (<Message type="success" msg={message}/>)}

</div>
)
/*Atualizar COmandos do Navigate sla oq do novo react-router-dom para funcionar*/ 
}

export default Projects; 