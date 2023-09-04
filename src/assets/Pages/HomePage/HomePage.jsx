import './HomePage.scss'
import Tile from "../../components/Tile/index.jsx";
import AboutBox from "../../components/AboutBox/index.jsx";
import PopularBox from "../../components/PopularBox/index.jsx";
import {useEffect, useState} from "react";
import useApi from "../../components/useApi/index.jsx";
import {useSelector} from "react-redux";
import UseApi from "../../components/useApi/index.jsx";
import {FILTER_CARD} from "../../store/actions.jsx";
import {storeElement14} from "../../variables.js";

function HomePage() {
    const { todosFilter } = useSelector((state) => state.todos);
    // const [sortType1, setSortType1] = useState('popularity.desc');
    // const [genre, setGenre] = useState(genre_id);
    // useApi({sortType1, genre});
    const [search, setSearch] = useState(todosFilter);
    useEffect(() =>{
        setSearch('')
    })
    UseApi({type:FILTER_CARD, storeElement:storeElement14, nameId: search});
    return (
        <div className={"content"}>
            <main className={"content__main"}>
                <Tile/>
                <AboutBox/>
            </main>
            <aside className={"content__aside"}>
                <PopularBox/>

            </aside>
        </div>
    );
}

export default HomePage;