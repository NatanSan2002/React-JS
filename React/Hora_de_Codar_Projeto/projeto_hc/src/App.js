import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
/* Routes = Switch*/ 

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/Projects";
import EditProject from "./components/pages/EditProject";

import Container from "./components/pages/layout/Container.js";
import NavBar from "./components/pages/layout/NavBar";
import Footer from "./components/pages/layout/Footer";



function App() {
  return (  
<Router>
<NavBar/>
 
 <Container customClass="min_height">
   
<Routes>
<Route exact path="/" element={<Home/>}/>

<Route exact path="/company" element={<Company/>}/>

<Route exact path="/contact" element={<Contact/>}/>

<Route exact path="/newproject" element={<NewProject/>}/>

<Route path="/projects" element={<Projects/>}/>

<Route path="/editproject" element={<EditProject/>}/>
</Routes>
</Container>


<Footer/>

</Router>
    
  );
}

export default App;
