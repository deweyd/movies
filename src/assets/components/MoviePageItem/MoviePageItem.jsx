import {Link} from "react-router-dom";
import './MoviePageItem.scss'
import logo from '../../images/Logo.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import CardPerson from "../CardPerson/index.jsx";
import CardVideo from "../CardVideo/index.jsx";


function MoviePageItem({todosMovie, todosRole, todosVideo, handleElement}) {
    console.log(todosMovie)
    return (
        <div className={"movie movie-page"}>
            <div className='movie__item'>
                <div className="movie__left-box">
                    <Link href="" className='movie__img'>
                        {todosMovie.poster_path === null ? (
                            <img src="https://i.ibb.co/2t0SLBN/noimage.png" alt="" />
                        ) : (
                            <img src={`https://image.tmdb.org/t/p/w342${todosMovie.poster_path}`}/>
                        )}
                    </Link>
                    <div className="movie__points">
                        <div className='movie__point'>
                            <div className='movie__point-text'>
                                <span className='movie__point-number'>{todosMovie.vote_count}</span>
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
                                <span className='movie__point-number'>{todosMovie.vote_average}</span>
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
                    <div className="movie__title">{todosMovie.title}</div>
                    <div className="movie__number">
                        <div className="movie__year">Дата релізу<span>{todosMovie.release_date}</span></div>
                    </div>
                    <div className="movie__description description">
                        <div className="description__title">
                            Про що фільм {todosMovie.title}
                        </div>
                        <div className="description__text">
                            <p>{todosMovie.overview}</p>
                        </div>
                    </div>
                </div>
                <div className={"movie__actors actors"}>
                    <div className="actors__title">У головних ролях</div>
                    <div className="actors__cards">
                        <Swiper
                            slidesPerView={8}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {todosRole.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <CardPerson handleElement={handleElement}  item={item} key={index}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>

                </div>
                {todosVideo.length === 0 ? (
                    <div>_</div>
                ) : (
                    <div className='movie__video video'>
                        <div className="actors__title">Видеоролики</div>
                        <div className='video__box'>
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {todosVideo.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <CardVideo item={item} key={index} handleElement={handleElement}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default MoviePageItem;