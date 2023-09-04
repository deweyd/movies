import './MoviePage.scss'
import SelectionCardPerson from "../../components/SelectionСardPerson";
import {useState,  useEffect} from "react";
import {
    storeElement9,
    storeElement10,
    storeElement11,
    popularity,
    storeElement1,
    popularity_name,
    vote_count,
    storeElement2,
    vote_count_name,
    popular,
    revenue_name,
    revenue,
    storeElement3,
    storeElement5,
    storeElement16, storeElement14
} from "../../variables.js";
import {useDispatch, useSelector} from "react-redux";
import UseApiPerson from "../../components/UseApiPerson/index.jsx";
import {
    DATA_CARD,
    DATA_CARD_VOTES,
    DATA_MOVIE,
    DATA_ROLE,
    DATA_PERSON,
    DATA_PERSON_PAGE,
    DATA_REVENUE, DATA_VIDEO, DATA_ID, DATA_TV, DATA_MOVIE_TV, FILTER_CARD
} from "../../store/actions.jsx";
import CardPerson from "../../components/CardPerson/index.jsx";
import UseApiPersonPage from "../../components/UseApiPersonPage/index.jsx";
import {Link} from "react-router-dom";
import UseApiVotes from "../../components/UseApiVotes/index.jsx";
import UseApi from "../../components/useApi/index.jsx";
import PopularBox from "../../components/PopularBox/index.jsx";
import Selection from "../../components/Selection/index.jsx";
import PopularItem from "../../components/PopularItem/index.jsx";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import CardSlider from "../../components/CardSlider/index.jsx";
import CardVideo from "../../components/CardVideo/index.jsx";
import MoviePageItem from "../../components/MoviePageItem/index.jsx";
import ScrollToTop from "react-scroll-to-top";



function MoviePage() {
    const { personId, todosFilter } = useSelector((state) => state.todos);
    const [search, setSearch] = useState(todosFilter);
    useEffect(() =>{
        setSearch('')
    })
    UseApi({type:FILTER_CARD, storeElement:storeElement14, nameId: search});
    const [person, setPerson] = useState('');
    const dispatch = useDispatch();
    const handleElement = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
console.log(personId)
    UseApi({type:DATA_MOVIE, storeElement:storeElement9, nameId:personId});
    UseApi({type:DATA_MOVIE_TV, storeElement:storeElement16, nameId:personId});
    UseApi({type:DATA_ROLE, storeElement:storeElement10, nameId:personId});
    UseApi({type:DATA_VIDEO, storeElement:storeElement11, nameId:personId});

    const { todosMovie, todosMovieTv, todos1, todosRevenue, todosRole, todosVideo } = useSelector((state) => state.todos);
    console.log(todosMovie)
    console.log(todosRole)
    console.log(todosVideo)
    console.log(todosMovieTv)
    return (
        <div className={"content"}>
            <main className={"content__main "}>
                <MoviePageItem todosMovie={todosMovie} todosRole={todosRole} todosVideo={todosVideo} handleElement={handleElement}/>
                <Selection sortType={popularity} type={DATA_CARD} storeElement={storeElement1} todos={todos1} name={popularity_name}/>
            </main>
            <aside className={"content__aside"}>
                <div className="popular-box">
                    <div className='popular-box__title'>
                        <Link to="/" className={"popular-box__title-link"}>
                            {revenue_name}
                        </Link>
                    </div>
                    <PopularItem sortType={revenue} type={DATA_REVENUE} todos={todosRevenue} storeElement={storeElement3}/>
                </div>
            </aside>
        </div>
    );
}

export default MoviePage;