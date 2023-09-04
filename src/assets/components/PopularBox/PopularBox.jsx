import {Link} from "react-router-dom";
import './PolularBox.scss'
import PopularItem from "../PopularItem/index.jsx";
import PopularSlider from "../PopularSlider/index.jsx";
import {
    revenue_name,
    revenue,
    storeElement3,
    primary,
    storeElement4
} from "../../variables.js"
import {DATA_REVENUE, DATA_PRIMARY} from "../../store/actions.jsx";
import {useSelector} from "react-redux";

function PopularBox() {
    const { todosRevenue, todosPrimary, personId } = useSelector((state) => state.todos);
    return (
        <div>
            <div className="popular-box">
                <div className='popular-box__title'>
                    <div className={"popular-box__title-link"}>
                        {revenue_name}
                    </div>
                </div>
                <PopularItem type={DATA_REVENUE} todos={todosRevenue} personId={personId} storeElement={storeElement3}/>
            </div>
            <div className="popular-box">
                <div className='popular-box__title'>
                    <div className={"popular-box__title-link"}>
                        Новые коллекции
                    </div>
                </div>
                <PopularSlider type={DATA_PRIMARY} todos={todosPrimary} personId={personId} storeElement={storeElement4}/>
            </div>
        </div>
    );
}

export default PopularBox;