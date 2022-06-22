import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
return(
<footer>
    <ul>
    <li><a href="https://github.com/NatanSan2002/" target="blank"><BsGithub/></a></li>
    <li> <a href="https://www.linkedin.com/in/natan-santos-gomes-823a33228/" target="blank"><FaLinkedin/></a></li>
    </ul>
<p className={style.copy_right}><span>Costs</span> &copy; 2022</p>
</footer>
)
}

export default Footer;