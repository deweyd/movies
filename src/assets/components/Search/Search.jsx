import './Search.scss';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DATA_MOVIE, FILTER_CARD} from "../../store/actions.jsx"
import searchIcon from "../../images/search.svg"
import UseApi from "../useApi/index.jsx";
import {storeElement14} from "../../variables.js";
import {Link} from "react-router-dom";


function Search() {
    const {todos1, dataSection} = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    UseApi({type:FILTER_CARD, storeElement:storeElement14, nameId: search});
    return (
        <div className={"example"}>
            <input
                type="text"
                placeholder=""
                value={search}
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                // onBlur={handleInputBlur}
            />
            <Link className="button-search" to="/Genre" >
                <img src={searchIcon} alt="SearchPage" />
            </Link>
        </div>
    );
}

export default Search;