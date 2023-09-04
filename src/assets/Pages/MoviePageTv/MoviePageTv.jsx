import './MoviePageTv.scss'
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
    storeElement16, storeElement17, storeElement18
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
    DATA_REVENUE, DATA_VIDEO, DATA_ID, DATA_TV, DATA_MOVIE_TV, DATA_ROLE_TV, DATA_VIDEO_TV
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
import TvPageItem from "../../components/TvPageItem/index.jsx";



function MoviePageTv() {
    const { personId } = useSelector((state) => state.todos);
    const [person, setPerson] = useState('');
    const dispatch = useDispatch();
    const handleElement = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    console.log(personId)
    UseApi({type:DATA_MOVIE_TV, storeElement:storeElement16, nameId:personId});
    UseApi({type:DATA_ROLE_TV, storeElement:storeElement17, nameId:personId});
    UseApi({type:DATA_VIDEO_TV, storeElement:storeElement18, nameId:personId});

    const { todosMovieTv, todos1, todosRevenue, todosRoleTv, todosVideoTv } = useSelector((state) => state.todos);

    console.log(todosMovieTv)
    return (
        <div className={"content"}>
            <main className={"content__main "}>
                <TvPageItem todosMovie={todosMovieTv} todosRole={todosRoleTv} todosVideo={todosVideoTv} handleElement={handleElement}/>
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


export default MoviePageTv;