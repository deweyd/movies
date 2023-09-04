import './Header.scss'
import Logo from "../Logo/index.jsx";
import Menu from "../Menu/index.jsx";
import Search from "../Search/index.jsx";
import {useState} from "react";



function Header() {
    const [click, setClick] = useState(null)
    return (
        <div className={"header"}>
            <div className="container-wrap">
                <div className={"header__left"}>
                    <Logo onClick={() => setClick(null)}/>
                    <Menu click={click} handleActive={setClick}/>
                </div>
                <Search/>
            </div>
        </div>
    );
}

export default Header;