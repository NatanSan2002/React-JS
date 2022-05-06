import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

/* Routes = Switch*/

function App() {
  return (  
<Router>
<ul>
  <li>Home</li>
  <li>Contato</li>
</ul>
<Routes>
<Route exact path="/" element={<Home/>}/>

<Route exact path="/company" element={<Company/>}/>

<Route exact path="/contato" element={<Contact/>}/>

<Route exact path="/newproject" element={<NewProject/>}/>
</Routes>


<footer></footer>

</Router>
    
  );
}

export default App;
