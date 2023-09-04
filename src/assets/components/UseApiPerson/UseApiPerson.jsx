import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DATA_CARD_VOTES, setDataCart} from "../../store/actions.jsx";
import axios from 'axios';


const useApiPerson = ({sortType, type, storeElement}) => {
    console.log(sortType)
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/person/${sortType}`,{
                        params: {
                            api_key: '55e4064c8cf36ae8ece34a3ada568bca',
                            page: '1',
                            language: 'ru-RU',
                            // sort_by: 'name'
                        }
                    }
                );
                dispatch({ type: type, [storeElement]: response.data.results});
            } catch (error) {
                console.error('Error', error);
            }
        };


        fetchData();
    }, [dispatch, sortType]);

    return;
};

export default useApiPerson;

