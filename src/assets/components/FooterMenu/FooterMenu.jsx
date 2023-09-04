import './FooterMenu.scss'
import {Link} from "react-router-dom";
import Menu from "../Menu/Menu.jsx";

function FooterMenu() {
    return (
        <div className={"footer__menu"}>
            <nav className={"footer__menu__main"}>
                <span className='footer__caption'>Меню</span>
                <Menu/>
            </nav>
        </div>
    );
}

export default FooterMenu;