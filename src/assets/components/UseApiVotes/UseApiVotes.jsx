import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DATA_CARD_VOTES, setDataCart} from "../../store/actions.jsx";
import axios from 'axios';


const useApiVotes = ({sortType, type, storeElement, load, group, genre, nameId}) => {

    const dispatch = useDispatch();
    useEffect(() => {

        const fetchData = async () => {
            // if(!todos1 && !sortType && !todosVotes){
            //
            // }
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${group}`,{
                        params: {
                            api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                            page: load,
                            with_genres: genre,
                            language: 'uk-UK',
                            sort_by: sortType
                        }
                    }
                );
                dispatch({ type: type, [storeElement]: response.data.results });
            } catch (error) {
                console.error('Error', error);
            }

        };


        fetchData();
    }, [dispatch, sortType, load, group, genre, nameId]);


    return;
};

export default useApiVotes;

