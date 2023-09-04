import {Link} from "react-router-dom";
import './Tile.scss'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import useApi from "../useApi/index.jsx";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {DATA_CARD, DATA_ID, DATA_LOAD} from "../../store/actions.jsx";
import {movie, popularity, storeElement1, storeElement5, storeElement8} from "../../variables.js";
import UseApi from "../useApi/index.jsx";
import tile from "./index.jsx";


function Tile() {

    // const dispatch = useDispatch();
    const [sortType1, setSortType1] = useState(popularity);
    const [genre, setGenre] = useState(null);
    const dispatch = useDispatch();

    const handleCategory = (id, title) => {
        console.log(id)
        setGenre(id)
        console.log(title)
        dispatch({ type: DATA_ID, personId: id, nameGroup: title });
    }
    const {dataSection, personId} = useSelector((state) => state.todos);
    UseApi({
        sortType:sortType1,
        type:DATA_CARD,
        storeElement:storeElement1,

    });
    console.log( genre)
    UseApi({
        sortType:sortType1,
        type:DATA_LOAD,
        storeElement:storeElement8,
        nameId: personId
    });
    return (
        <div>
            <div className={"content__tile-box"}>
                {dataSection.sectionBig.map((item, index) => {
                    return (
                        <div className="content__tile tile tile_big" key={index}>
                            <Link id={item.id}  to="/Genre" className={"tile__img"} onClick={()=> handleCategory(item.id, item.title)}>
                                <img src={item.img}/>
                                <div className="tile__text">
                                    <span className="tile__name">{item.title}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className={"content__tile-box"}>
                {dataSection.sectionMiddle.map((item, index) => {
                    return (
                        <div className="content__tile tile tile_average" key={index}>
                            <Link to="/Genre" className={"tile__img"} onClick={()=> handleCategory(item.id)}>
                                <img src={item.img}/>
                                <div className="tile__text">
                                    <span className="tile__name">{item.title}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className={"content__tile-box"}>
                {dataSection.sectionSmall.map((item, index) => {
                    return (
                        <div key={index} className="content__tile tile tile_small">
                            <Link to="/Genre" className={"tile__img"} onClick={()=> handleCategory(item.id)}>
                                <img src={item.img}/>
                                <div className="tile__text">
                                    <span className="tile__name">{item.title}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>




    );
}

export default Tile;