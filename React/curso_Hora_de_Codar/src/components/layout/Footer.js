import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

import {DiAndroid} from "react-icons/di";

import style from "./Footer.module.css";


function Footer() {
return (
<>
<footer> 
    <ul className={style.social_list}>
    <li> <FaFacebook/> </li>
    <li> <FaInstagram/> </li>
    <li> <FaLinkedin/> </li>
    <li> <DiAndroid/></li>

    </ul>
    
<p> Nosso Rodapé</p>
    </footer>
</>
)
}

export default Footer;