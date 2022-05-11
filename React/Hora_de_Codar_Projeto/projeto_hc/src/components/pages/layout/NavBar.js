import {BrowserRouter as Router, Link} from "react-router-dom";

import Container from "./Container.js";

import style from "./Navbar.module.css";

import logo from "../../../imgs/costs_logo.png";

function NavBar() {
return(
    <nav className={style.navbar}>
    <Container>
    <Link to="/"><img src={logo} alt="Costs"/></Link>
        <ul className={style.list}>
        <li  className={style.iten}><Link to="/"> Home</Link></li>
  <li className={style.iten}><Link to="/contact">Contact</Link></li>
      <li className={style.iten}><Link to="/company">Company</Link></li>
      <li className={style.iten}><Link to="/projects">Projects</Link></li>
      
  
        </ul>
  </Container>
  </nav>
)
}

export default NavBar;

