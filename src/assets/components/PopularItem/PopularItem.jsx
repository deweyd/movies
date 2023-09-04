import {Link} from "react-router-dom";
import './PolularItem.scss'
import popular from '../../images/popular.png'
import {useState} from "react";
import useApi from "../useApi/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/index.jsx";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {movie} from "../../variables.js";
import {DATA_ID} from "../../store/actions.jsx";
import UseApi from "../useApi/index.jsx";


function PopularItem({todos, storeElement, type, personId}) {
    const [group, setGroup] = useState(movie);
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    UseApi({type, storeElement, nameId: personId});
    return (
        <div className="popular-box__item-wrap">
            {todos.slice(0, 18).map((item, index) => {
                return (
                    <div key={index} className='popular-box__item'>
                        <Link className='popular-box__img' to="/MoviePage" onClick={()=> handleItem(item.id)}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}/>
                        </Link>
                        <div className='popular-box__info'>
                    <span className='popular-box__time'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_55_776)">
                            <path d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z" fill="#A4A4A4"/>
                            <path d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z" fill="#A4A4A4"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_55_776">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        {item.release_date}
                    </span>
                            <Link to="/MoviePage" onClick={()=> handleItem(item.id)} className='popular-box__link'>{item.overview.split("").slice(0,62).join("")}</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default PopularItem;