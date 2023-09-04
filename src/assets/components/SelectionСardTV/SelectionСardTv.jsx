import {useDispatch, useSelector} from 'react-redux';
import Card from '../Card/index.jsx';
import './SelectionСardTv.scss'
import Filters from "../Filters/index.jsx";
import {useState} from "react";
import {storeElement5, popularity, movie, storeElement8, tv, storeElement15, storeElement1} from "../../variables.js";
import {DATA_CARD, DATA_ID, DATA_LOAD, DATA_LOAD_TV, DATA_TV} from "../../store/actions.jsx";
import UseApi from "../useApi/index.jsx";

function SelectionCardTv() {
        const dispatch = useDispatch();
        const [sortType1, setSortType1] = useState(popularity);
        const [load, setLoad] = useState(2);
        const [patch, setPatch] = useState('/MoviePageTv');
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
        const { todos1, todosFilter, todosLoadTv, personId } = useSelector((state) => state.todos);
        UseApi({
            sortType:sortType1,
            type:DATA_TV,
            storeElement:storeElement5,
        });

        UseApi({
            sortType:sortType1,
            type:DATA_LOAD_TV,
            storeElement:storeElement15,
            load: load,
            nameId: personId
        });

        return (
            <div className={`content__selection selection ${todosFilter.length > 0 ? 'search-block' : ''}`}>
                {todosFilter.length > 0 ? <div className="selection__title">Результати пошуку</div> : <div className="selection__title">Найкращі серіали підбірки</div>}
                {todosFilter.length > 0 ? null : <Filters sortType={sortType1} handleChange={handleChange}/>}
                <div className="selection__cards">
                    {todosFilter.length > 1 ? todosFilter.map((item, index) => (
                        <Card item={item} key={index} handleItem={handleItem} patch={patch}/>
                    )) : todosLoadTv.map((item, index) => (
                        <Card item={item} key={index} handleItem={handleItem} patch={patch}/>
                    ))}
                </div>
                {todosFilter.length > 0 ? null : <button className={"load-button"} onClick={handleLoad}>Загрузка</button>}
            </div>
        );
        }


export default SelectionCardTv;