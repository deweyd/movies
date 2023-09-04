import './Slider_main.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {DATA_CARD_VOTES, DATA_ID} from "../../store/actions.jsx"
import {vote_count, storeElement2} from "../../variables.js"
import UseApi from "../useApi/index.jsx";


function Slider_main() {
    const dispatch = useDispatch();
    const { todosVotes, personId } = useSelector((state) => state.todos);
    const pagination = {
        clickable: true,
    };
    const handleItem = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    UseApi(
        {
            type:DATA_CARD_VOTES,
            storeElement:storeElement2,
            nameId: personId
        });
    return (
        <div className={"main-slider"}>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {todosVotes.slice(3, 6).map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link className="card__img" to="/MoviePage" onClick={()=> handleItem(item.id)}>
                                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}/>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Slider_main;