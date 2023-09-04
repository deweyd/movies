import {useDispatch, useSelector} from 'react-redux';
import Card from '../Card/index.jsx';
import useApi from "../useApi/index.jsx";
import './SelectionСard.scss'
import Filters from "../Filters/index.jsx";
import {useState} from "react";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {storeElement1, popularity, storeElement8, movie, storeElement5} from "../../variables.js";
import {DATA_CARD, DATA_ID, DATA_LOAD, DATA_TV} from "../../store/actions.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import UseApi from "../useApi/index.jsx";


function SelectionСard() {
    const dispatch = useDispatch();
    const [sortType1, setSortType1] = useState(popularity);
    const [patch, setPatch] = useState('/MoviePage');
    const [load, setLoad] = useState(2);
    const handleChange = (e) => {
        setSortType1(e.target.value);
    }
    const handleLoad = () => {
        setLoad(load+1);
        console.log(load)

    }
    const handleItem = (id) => {
        console.log(id)
        dispatch({ type: DATA_ID, personId: id });
    }
    const { todos1, todosFilter, todosLoad, personId } = useSelector((state) => state.todos);
    console.log(personId)
    UseApi({
        sortType:sortType1,
        type:DATA_CARD,
        storeElement:storeElement1
    });

    UseApi({
        sortType:sortType1,
        type:DATA_LOAD,
        storeElement:storeElement8,
        load: load,
        nameId: personId
    });


    return (
        <div className={`content__selection selection ${todosFilter.length > 0 ? 'search-block' : ''}`}>
            {todosFilter.length > 0 ? <div className="selection__title">Результати пошуку</div> : <div className="selection__title">Найкращі фільми підбірки</div>}
            {todosFilter.length > 0 ? null : <Filters sortType={sortType1} handleChange={handleChange}/>}
            <div className="selection__cards">
                {todosFilter.length > 1 ? todosFilter.map((item, index) => (
                    <Card item={item} key={index} handleItem={handleItem} patch={patch}/>
                )) : todosLoad.map((item, index) => (
                    <Card item={item} key={index} handleItem={handleItem} patch={patch}/>
                ))}
            </div>
            {todosFilter.length > 0 ? null : <button className={"load-button"} onClick={handleLoad}>Загрузка</button>}
        </div>
    );
}


export default SelectionСard;