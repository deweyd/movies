
import { useSelector } from 'react-redux';
import Card from '../Card/index.jsx';
import useApi from "../useApi/index.jsx";
import './Person.scss'
import Filters from "../Filters/index.jsx";
import {useState} from "react";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {storeElement1, popularity} from "../../variables.js";
import {DATA_CARD} from "../../store/actions.jsx";
import CardPerson from "../CardPerson/index.jsx";

function Person() {
    const [sortType1, setSortType1] = useState(popularity);
    const handleChange = (e) => {
        setSortType1(e.target.value);
    }
    // console.log(sortType1)
    // useApi({sortType1});
    // const { todos1 } = useSelector((state) => state.todos);
    // console.log('todos1:', todos1);


    const { todos1 } = useSelector((state) => state.todos);
    const pagination = {
        clickable: true,
    };
    UseApiVotes({sortType:sortType1, type:DATA_CARD, storeElement:storeElement1});


    return (
        <div className={"content__selection selection"}>
            <a href="/" className="selection__title">Персони</a>
            <Filters sortType={sortType1} handleChange={handleChange}/>
            <div className="selection__cards">
                {todos1.map((item, index) => {
                    return (
                        <CardPerson item={item} key={index} />
                    );
                })}
            </div>
        </div>
    );
}


export default Person;