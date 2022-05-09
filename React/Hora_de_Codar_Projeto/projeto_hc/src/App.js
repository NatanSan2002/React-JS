import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
/* Routes = Switch*/ 

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./components/pages/layout/Container.js";



function App() {
  return (  
<Router>
<div>
  <Link to="/">Home</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/company">Company</Link>
  <Link to="/newproject">Newproject</Link>
  </div>
 
 <Container customClass="min_height">
<Routes>
<Route exact path="/" element={<Home/>}/>

<Route exact path="/company" element={<Company/>}/>

<Route exact path="/contact" element={<Contact/>}/>

<Route exact path="/newproject" element={<NewProject/>}/>
</Routes>
</Container>


<p>Footer</p>

</Router>
    
  );
}

export default App;
