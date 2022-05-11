import {FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
return(
<footer>
    <ul>
    <li>
    <FaFacebook/></li>
    <li><FaInstagram/></li>
    <li> <FaLinkedin/></li>
    </ul>
<p className={style.copy_right}><span>Costs</span> &copy; 2022</p>
</footer>
)
}

export default Footer;