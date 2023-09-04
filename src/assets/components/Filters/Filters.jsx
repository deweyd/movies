import './Filters.scss'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";




function Filters({sortType, setSortType, handleChange}) {

    return (
        <form className="filter">
            <label htmlFor="sort">Сортування по </label>
            <select
                className={"filter__select"}
                value={sortType}
                onChange={handleChange}
                id="sort">
                <option value="popularity.desc">Популярні за спаданням</option>
                <option value="popularity.asc">Популярні за зростанням</option>
                <option value="revenue.desc">По доходу за спаданням</option>
                <option value="revenue.asc">По доходу за зростанням</option>
                <option value="vote_average.desc">Рейтинг за спаданням</option>
                <option value="vote_average.asc">Рейтинг за зростанням</option>
                <option value="primary_release_date.desc">Дата випуску за спаданням</option>
                <option value="primary_release_date.asc">Дата випуску за зростанням</option>
                <option value="vote_count.desc">По голосах за спаданням</option>
                <option value="vote_count.asc">По голосах за зростанням</option>
            </select>
        </form>
    );
}

export default Filters;