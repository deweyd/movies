import './Selection.scss'
import Card from "../Card/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {Link} from "react-router-dom";
import CardSlider from "../CardSlider/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import useApi from "../useApi/index.jsx";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {movie} from "../../variables.js";
import {DATA_ID} from "../../store/actions.jsx";
import UseApi from "../useApi/index.jsx";


function Selection({todos, storeElement, type, name, personId}) {
    const [group, setGroup] = useState(movie);
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    UseApi({type, storeElement, nameId: personId});
    return (
        <>
            <div className={"content__selection selection"}>
                <div className="selection__title">{name}</div>
                <div className="selection__cards">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            1300: {
                                slidesPerView: 5
                            },
                            1000: {
                                slidesPerView: 4
                            },
                            567: {
                                slidesPerView: 3
                            },

                            320: {
                                slidesPerView: 1
                            },
                            // Другие настройки разрешений экрана
                        }}
                    >
                        {todos.slice(0,10).map((item, index) => {
                            return (
                                <SwiperSlide key={index}><CardSlider handleItem={handleItem} card={item} key={index}/></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </div>

        </>
    );
}

export default Selection;