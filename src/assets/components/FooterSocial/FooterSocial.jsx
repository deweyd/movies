import './FooterSocial.scss'
import {Link} from "react-router-dom";
import face from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";

function FooterSocial() {
    return (
        <div className={"footer__social"}>
            <Link to='' className={"footer__social-link facebook"}>
                <img src={face}/>
            </Link>
            <Link to='' className={"footer__social-link instagram"}>
                <img src={instagram}/>
            </Link>

        </div>
    );
}

export default FooterSocial;