
import {useDispatch, useSelector} from 'react-redux';
import Card from '../Card/index.jsx';
import useApi from "../useApi/index.jsx";
import './SelectionСardPerson.scss'
import Filters from "../Filters/index.jsx";
import {useState} from "react";
import UseApiVotes from "../UseApiVotes/index.jsx";
import {storeElement6, popular, name, storeElement7, storeElement8} from "../../variables.js";
import {DATA_CARD, DATA_ID, DATA_LOAD, DATA_PERSON, DATA_PERSON_PAGE} from "../../store/actions.jsx";
import CardPerson from "../CardPerson/index.jsx";
import UseApiPerson from "../UseApiPerson/index.jsx";
import UseApi from "../useApi/index.jsx";

function SelectionCardPerson() {
    const [load, setLoad] = useState(1);
    const { todosPerson, nameId, todosLoad } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleElement = (id) => {
        dispatch({ type: DATA_ID, personId: id });
    }
    const handleLoad = () => {
        setLoad(load+1);
    }
    UseApi({type:DATA_PERSON, storeElement:storeElement6, load: load, nameId: nameId});
    // UseApiVotes({
    //     type:DATA_LOAD, storeElement:storeElement8, load: load, nameId: nameId
    // });
    return (
        <div className={"content__selection selection"}>
            <div className="selection__title">Популярні персони</div>
            <div className="selection__cards">
                {todosPerson
                    .filter((item, index, array) => array.findIndex(i => i.id === item.id) === index)
                    .map((uniqueItem, index) => (
                        <CardPerson item={uniqueItem} key={uniqueItem.id} handleElement={handleElement}/>
                    ))}
            </div>
            <div className={"load-button"} onClick={handleLoad}>Загрузка</div>
        </div>
    );
}


export default SelectionCardPerson;