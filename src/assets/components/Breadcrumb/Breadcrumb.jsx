import {Link} from "react-router-dom";
import './Breadcrumb.scss'


function Breadcrumb() {
    return (
        <ul className={'breadcrumb'}>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/">Подборки</Link>
            </li>
            <li>
                <Link to="/">Лучшие фильмы всех времен</Link>
            </li>
        </ul>
    );
}

export default Breadcrumb;