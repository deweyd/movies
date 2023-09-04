import {Link} from "react-router-dom";
import './AboutMovie.scss'
import movie from '../../images/movie.png'
import {SwiperSlide} from "swiper/react";
import CardSlider from "../CardSlider/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {DATA_ID, SORT_CARD} from "../../store/actions.jsx";
import UseApi from "../useApi/index.jsx";
import {
    storeElement1,
} from "../../variables.js"


function AboutMovie() {
    const { todos1, personId } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    UseApi({SORT_CARD, storeElement1, personId: personId});
    return (
        <div className="content__movie movie">
            {todos1.slice(7,9).map((item, index) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className='movie__item'>
                        <div className='movie__num'>{index+1}</div>
                        <div className="movie__left-box">
                            <Link to="/MoviePage" className='movie__img' onClick={()=> handleItem(item.id)}>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}/>
                            </Link>
                            <div className="movie__points">
                                <div className='movie__point'>
                                    <div className='movie__point-text'>
                                        <span className='movie__point-number'>{item.vote_count}</span>
                                        <span className='movie__point-texts'>Кинопоиск</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157" fill="none">
                                        <g filter="url(#filter0_dd_16_841)">
                                            <circle cx="78.5" cy="78.5" r="58.5" stroke="black" stroke-width="4"/>
                                            <circle cx="78.5" cy="78.5" r="58.5" stroke="url(#paint0_linear_16_841)" stroke-width="4"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_16_841" x="0" y="0" width="157" height="157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="6" dy="6"/>
                                                <feGaussianBlur stdDeviation="6"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_841"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="-6" dy="-6"/>
                                                <feGaussianBlur stdDeviation="6"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.325 0 0 0 0 0.325 0 0 0 0 0.325 0 0 0 1 0"/>
                                                <feBlend mode="normal" in2="effect1_dropShadow_16_841" result="effect2_dropShadow_16_841"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_16_841" result="shape"/>
                                            </filter>
                                            <linearGradient id="paint0_linear_16_841" x1="78.5" y1="18" x2="78.5" y2="139" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FF8E00"/>
                                                <stop offset="1" stop-color="#FF6C01"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='movie__point'>
                                    <div className='movie__point-text'>
                                        <span className='movie__point-number'>{item.vote_average}</span>
                                        <span className='movie__point-texts'>IMDb</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157" fill="none">
                                        <g filter="url(#filter0_dd_16_847)">
                                            <circle cx="78.5" cy="78.5" r="58.5" stroke="#E3AC3C" stroke-width="4"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_dd_16_847" x="0" y="0" width="157" height="157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="6" dy="6"/>
                                                <feGaussianBlur stdDeviation="6"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_847"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="-6" dy="-6"/>
                                                <feGaussianBlur stdDeviation="6"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.325 0 0 0 0 0.325 0 0 0 0 0.325 0 0 0 1 0"/>
                                                <feBlend mode="normal" in2="effect1_dropShadow_16_847" result="effect2_dropShadow_16_847"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_16_847" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='movie__about'>
                            <div className="movie__title">{item.title}</div>
                            {/*<div className="movie__subtitle">_</div>*/}
                            <div className="movie__number">
                                {/*<div className="movie__duration">Продолжительность<span>1 час 58 минут</span></div>*/}
                                <div className="movie__year">Дата релізу<span>{item.release_date}</span></div>
                                {/*<div className="movie__premier">Премьэра фильма<span>22 апреля 2021</span></div>*/}
                                {/*<div className="movie__age">Возраст<span>16+</span></div>*/}
                            </div>
                            <div className="movie__basic">
                                <div className="movie__genre">
                                    <div className="movie__genre-left">Жанр</div>
                                    <div className="movie__genre-right">{item.genre_ids.map((item1)=> {item1})}</div>
                                </div>
                                {/*<div className="movie__country">*/}
                                {/*    <div className="movie__country-left">Страна</div>*/}
                                {/*    <div className="movie__country-right">США</div>*/}
                                {/*</div>*/}
                                {/*<div className="movie__role">*/}
                                {/*    <div className="movie__role-left">В главных ролях</div>*/}
                                {/*    <div className="movie__role-right">Адам Уэст, Берт Уорд, Уильям Шетнер</div>*/}
                                {/*</div>*/}
                                {/*<div className="movie__selections">*/}
                                {/*    <div className="movie__selections-left">Участвует в подборках</div>*/}
                                {/*    <div className="movie__selections-right">*/}
                                {/*        <Link href="">2021</Link>*/}
                                {/*        <Link href="">Нетфликс</Link>*/}
                                {/*        <Link href="">Вестерны</Link>*/}
                                {/*        <Link href="">Аниме</Link>*/}
                                {/*        <Link href="">Лучшие фильмы 2021</Link>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <div className="movie__description description">
                                <div className="description__title">
                                    Про що фільм {item.title}
                                </div>
                                <div className="description__text">
                                    <p>{item.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default AboutMovie;