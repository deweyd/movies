import './Home.scss'
import Box from "../../components/Box/index.jsx";
import Selection from "../../components/Selection/index.jsx";
import PopularBox from "../../components/PopularBox/index.jsx";
import AboutMovie from "../../components/AboutMovie/index.jsx";
import {useSelector} from "react-redux";
import {DATA_CARD_VOTES, DATA_CARD, FILTER_CARD} from "../../store/actions.jsx";
import {
    vote_count,
    popularity,
    storeElement1,
    storeElement2,
    popularity_name,
    vote_count_name, storeElement14
} from "../../variables.js"
import {useEffect, useState} from "react";
import UseApi from "../../components/useApi/index.jsx";

function Home() {
    const { todosVotes, todos1, todosFilter } = useSelector((state) => state.todos);
    const [search, setSearch] = useState(todosFilter);
    useEffect(() =>{
        setSearch('')
    })
    UseApi({type:FILTER_CARD, storeElement:storeElement14, nameId: search});
    return (
        <div className={"content"}>
            <main className={"content__main"}>
                <Box/>
                <Selection type={DATA_CARD} storeElement={storeElement1} todos={todos1} name={popularity_name}/>
                <Selection type={DATA_CARD_VOTES} storeElement={storeElement2} name={vote_count_name} todos={todosVotes}/>
                <AboutMovie/>
            </main>
            <aside className={"content__aside"}>
                <PopularBox/>
            </aside>
        </div>
    );
}

export default Home;