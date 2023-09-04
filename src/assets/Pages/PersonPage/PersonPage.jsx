import './PersonPage.scss'
import SelectionCardPerson from "../../components/SelectionСardPerson";
import {useState} from "react";
import {revenue, revenue_name, storeElement12, storeElement3, storeElement4, storeElement7} from "../../variables.js";
import {useDispatch, useSelector} from "react-redux";
import {DATA_ID, DATA_PERSON_PAGE, DATA_PRIMARY, DATA_REVENUE, SORT_FILMS} from "../../store/actions.jsx";
import UseApi from "../../components/useApi/index.jsx";
import Card from "../../components/Card/index.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import CardPerson from "../../components/CardPerson/index.jsx";
import CardSlider from "../../components/CardSlider/index.jsx";
import PopularItem from "../../components/PopularItem/index.jsx";
import PopularSlider from "../../components/PopularSlider/index.jsx";



function PersonPage() {
    const { personId } = useSelector((state) => state.todos);
    // const [sortType, setSortType] = useState(personId);
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    UseApi({type:DATA_PERSON_PAGE, storeElement:storeElement7, nameId: personId});
    UseApi({type:SORT_FILMS, storeElement:storeElement12, nameId: personId});
    const { todosPersonPage, todosRevenue, todosFilms } = useSelector((state) => state.todos);
    console.log(todosFilms)
    return (
        <div className={"content"}>
            <main className={"content__main"}>
                <div className={"person-page"}>
                    <div className={"person-page__left-box"}>
                        <div className={"person-page__img"}>
                            {todosPersonPage.profile_path === null ? (
                                <img src="https://i.ibb.co/2t0SLBN/noimage.png" alt="" />
                            ) : (
                                <img src={`https://image.tmdb.org/t/p/w185${todosPersonPage.profile_path}`} alt="Actor Profile" />
                            )}
                        </div>
                        <div className={"person-page__social"}>

                        </div>
                        <div className={"person-page__info"}>

                            <div className={"person-page__gender"}>
                                {todosPersonPage.gender === 1 ? (
                                    <div><span>Стать:</span> Жіноча</div>
                                ) : (
                                    <div><span>Стать:</span> Чоловіча</div>
                                )}
                            </div>
                            <div className={"person-page__bird"}>
                                <span>День народження:</span> {todosPersonPage.birthday}
                            </div>
                            <div className={"person-page__city"}>
                                <span>Місце народження:</span> {todosPersonPage.place_of_birth}
                            </div>
                            {/*<div className='person-page__famious'>*/}
                            {/*    <span>Також відомий/а як:</span>*/}
                            {/*    {todosPersonPage.also_known_as.map((item, index) => {*/}
                            {/*    return (*/}
                            {/*        <div key={index}>{item}</div>*/}
                            {/*    );*/}
                            {/*})}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={"person-page__right-box"}>
                        <div className={"person-page__title"}>
                            {todosPersonPage.name}
                        </div>
                        <div className={"person-page__biography"}>
                            {todosPersonPage.biography ? (
                                <div>Біографія: <span>{todosPersonPage.biography}</span></div>
                            ) : (
                                <span>Біографіїї для даної персони наразі немає</span>
                            )}
                        </div>
                        <div className={"person-page__films films"}>
                            <div className="films__title">У головних ролях:</div>
                            <div className="films__cards">
                                <Swiper
                                    slidesPerView={6}
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
                                    {todosFilms.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <CardSlider handleItem={handleItem} card={item}/>
                                                {/*<CardPerson item={item} key={index}/>*/}
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className={"person-page__filmography"}>

                        </div>
                    </div>
                </div>
            </main>
            <aside className={"content__aside"}>
                <div className="popular-box">
                    <div className='popular-box__title'>
                        <div className={"popular-box__title-link"}>
                            {revenue_name}
                        </div>
                    </div>
                    <PopularSlider type={DATA_PRIMARY} todos={todosRevenue} personId={personId} storeElement={storeElement4}/>
                </div>
            </aside>
        </div>
    );
}

export default PersonPage;