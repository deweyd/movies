import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setDataCart} from "../../store/actions.jsx";
import axios from 'axios';
import App from "../../../App.jsx";
import {movie, tv, popularity, primary, vote_count} from "../../variables.js";


const useApi = ({type, storeElement, nameId, load, sortType}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [nameIdS, setNameIdS] = useState(nameId);
    const [sortType1, setSortType1] = useState('popularity.desc');
    console.log(sortType)
    console.log(nameId)
    console.log(nameIdS)
    useEffect(() => {
        const fetchData = async () => {
            let shouldSetGenres = false;
            try {
                if(type === "DATA_TV"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/${tv}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                language: 'uk-UK',
                                with_genres: nameId,
                                sort_by: sortType
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_CARD"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/${movie}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                language: 'uk-UK',
                                with_genres: nameId,
                                sort_by: sortType
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if (type === "DATA_LOAD") {
                    const params = {
                        api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                        language: 'uk-UK',
                        page: load,
                        sort_by: sortType
                    };

                    if (sortType === undefined) {
                        params.sort_by = "popularity";
                    }

                    if (nameId !== undefined && nameId !== null &&
                        (nameId === "28" ||
                            nameId === "10752" ||
                            nameId === "37" ||
                            nameId === "18" ||
                            nameId === "35" ||
                            nameId === "80" ||
                            nameId === "10751" ||
                            nameId === "53" ||
                            nameId === "27" ||
                            nameId === "14" ||
                            nameId === "10402" ||
                            nameId === "16" ||
                            nameId === "12" ||
                            nameId === "99" ||
                            nameId === "36" ||
                            nameId === "9648" ||
                            nameId === "10749")
                    ) {
                        params.with_genres = nameId;
                        console.log('hello');
                    }

                    const response = await axios.get(`https://api.themoviedb.org/3/${movie}`, { params });
                    console.log(params.sort_by);
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if (type === "DATA_LOAD_TV") {
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/${tv}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                language: 'uk-UK',
                                page: load,
                                sort_by: sortType
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_CARD_VOTES"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/${movie}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                language: 'uk-UK',
                                sort_by: vote_count
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_PRIMARY"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/${movie}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                language: 'uk-UK',
                                sort_by: primary
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_REVENUE"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/${movie}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                language: 'uk-UK',
                                sort_by: 'revenue.desc'
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "FILTER_CARD"){
                    console.log(nameId)
                    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                        params: {
                            api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                            query: nameId
                        }
                    });
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_ROLE"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/movie/${nameId}/credits?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.cast });
                }
                if(type === "DATA_ROLE_TV"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/tv/${nameId}/credits?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.cast });
                }
                if(type === "DATA_PERSON"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/person/popular`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                page: load,
                                language: 'ru-RU',
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_PERSON_PAGE"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/person/${nameId}`,{
                            params: {
                                api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                                page: '1',
                                language: 'ru-RU',
                                // sort_by: 'name'
                            }
                        }
                    );
                    console.log(type)
                    dispatch({ type: type, [storeElement]: response.data });
                }
                if(type === "DATA_MOVIE"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/movie/${nameId}?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    dispatch({ type: type, [storeElement]: response.data });
                }
                if(type === "DATA_MOVIE_TV"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/tv/${nameId}?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    dispatch({ type: type, [storeElement]: response.data });
                }
                if(type === "SORT_FILMS"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/person/${nameId}/movie_credits?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    dispatch({ type: type, [storeElement]: response.data.cast });
                }
                if(type === "DATA_VIDEO"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/movie/${nameId}/videos?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                if(type === "DATA_VIDEO_TV"){
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/tv/${nameId}/videos?api_key=55e4064c8cf36ae8ece34a3ada568bca&language=uk-UK`,{

                        }
                    );
                    dispatch({ type: type, [storeElement]: response.data.results });
                }
                else{
                    console.log(nameId)
                }

            } catch (error) {
                console.error('Error', error);
            }
            finally {
                setIsLoading(false);
            }
        };


        fetchData();
    }, [dispatch, nameId, storeElement, type, load, sortType]);

    return;
};

export default useApi;

