import './PolularSlider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slider from '../../images/slider1.png'
import 'swiper/css';
import {Link} from "react-router-dom";
import 'swiper/css/pagination';
import UseApiVotes from "../UseApiVotes/index.jsx";
import {useState} from "react";
import {movie} from "../../variables.js";
import {useDispatch} from "react-redux";
import {DATA_ID} from "../../store/actions.jsx";
import UseApi from "../useApi/index.jsx";


function PopularSlider({todos, storeElement, type, personId}) {
    const [group, setGroup] = useState(movie);
    const pagination = {
        clickable: true,
    };
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    UseApi({type, storeElement, personId: personId});
    return (
        <div className={"main-slider"}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {todos.slice(2, 5).map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link className="card__img" to="/MoviePage" onClick={()=> handleItem(item.id)}>
                                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default PopularSlider;