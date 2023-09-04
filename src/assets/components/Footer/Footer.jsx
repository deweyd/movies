import './Footer.scss'
import Logo from "../Logo/index.jsx";
import FooterMenu from "../FooterMenu/index.jsx";
import FooterAbout from "../FooterAbout/index.jsx";
import FooterBottom from "../FooterBottom/index.jsx";



function Footer() {
    return (
        <div className={"footer"}>
            <div className="footer__top">
                <div className="container-wrap">
                    <Logo/>
                    <div className="footer__box">
                        <FooterMenu/>
                        <FooterAbout/>
                    </div>
                </div>
            </div>
            <div className="container-wrap">
                <FooterBottom/>
            </div>
        </div>
    );
}

export default Footer;