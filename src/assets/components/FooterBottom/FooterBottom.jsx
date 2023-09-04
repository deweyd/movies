import './FooterBottom.scss'
import FooterSocial from "../FooterSocial/index.jsx";
import {Link} from "react-router-dom";

function FooterBottom() {
    return (
        <div className={"footer__bottom"}>
            <span className={"footer__law"}>©Все права защищены MovieDB.ru 2021</span>
            <FooterSocial/>
            <Link className={"footer__politic"} to=''>Политика конфиденциальности</Link>
        </div>
    );
}

export default FooterBottom;