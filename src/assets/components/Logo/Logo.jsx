import {Link} from "react-router-dom";
import './Logo.scss'
import logo from '../../images/Logo.svg'


function Logo({onClick}) {
    return (
        <Link to="/" className={"logo"} onClick={onClick} >
            <img src={logo}/>
        </Link>
    );
}

export default Logo;