import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home.js";
import Empresa from "./pages/Empresa.js";
import Contato from "./pages/Contato.js";







function App() {
 return (
<Router>


<ul>
<li>
  <Link to="/">Home</Link>
  </li>
  <li>
  <Link to="/empresa"> Empresa</Link>
  </li>
  <li>
   <Link to ="/contato">Contato</Link>  
  </li>
</ul>



<Routes>
<Route exact path="/"> 
<Home /> 
</Route>
<Route path="/empresa"> 
<Empresa /> 
</Route>
<Route path="/contato"> 
<Contato /> 
</Route>
</Routes>


</Router>

 )


}

export default App;
