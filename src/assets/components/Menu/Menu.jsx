import {Link} from "react-router-dom";
import './Menu.scss'
import {useState} from "react";

const menu = [
    {
        item: "Головна",
        link: "/"
    },
    {
        item: "По жанру",
        link: "/HomePage"
    },
    {
        item: "Фільми",
        link: "/Genre"
    },
    {
        item: "Серіали",
        link: "/TV"
    },
    {
        item: "Персони",
        link: "/Person"
    }
]

function Menu({click, handleActive}) {
    return (
        <div className={"menu"}>
            <nav className={"menu__main"}>
                <ul>
                    {
                        menu.map((item, id) => {
                            return (
                                <li key={id}>
                                    <Link
                                        id={id}
                                        className={click === id || (click === null && item.link === "/") ? 'active' : ''}
                                        onClick={() => handleActive(id)}
                                        to={item.link}
                                    >
                                        {item.item}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Menu;