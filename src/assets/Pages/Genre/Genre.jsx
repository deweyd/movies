import './Genre.scss'
import SelectionСard from "../../components/SelectionСard/index.jsx";
import {Link} from "react-router-dom";
import {revenue, revenue_name, storeElement14, storeElement3} from "../../variables.js";
import PopularItem from "../../components/PopularItem/index.jsx";
import {DATA_REVENUE, FILTER_CARD} from "../../store/actions.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import UseApi from "../../components/useApi/index.jsx";



function Genre() {
    const { todosRevenue, personId} = useSelector((state) => state.todos);

    return (
        <div className={"content"}>
            <main className={"content__main"}>
                <SelectionСard/>
            </main>
            <aside className={"content__aside"}>
                <div className="popular-box">
                    <div className='popular-box__title'>
                        <div className={"popular-box__title-link"}>
                            {revenue_name}
                        </div>
                    </div>
                    <PopularItem sortType={revenue} type={DATA_REVENUE} todos={todosRevenue} personId={personId} storeElement={storeElement3}/>
                </div>
            </aside>
        </div>
    );
}

export default Genre;