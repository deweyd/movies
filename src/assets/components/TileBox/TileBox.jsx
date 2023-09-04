import {Link} from "react-router-dom";
import './TileBox.scss'


function TileBox({img, title}) {
    return (
        <div className="content__tile tile tile_big">
            <Link to="/" className={"tile__img"}>
                <img src={img}/>
            </Link>
            <div className="tile__text">
                <span className="tile__name">{title}</span>
                <span className="tile__numbers">Подборок: <span>453</span></span>
            </div>
        </div>
    );
}

export default TileBox;