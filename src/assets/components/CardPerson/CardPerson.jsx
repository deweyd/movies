import {Link} from "react-router-dom";
import './CardPerson.scss'



function CardPerson({item, handleElement}) {
    return (
        <div className={"content__card card hover-img"}>
            <Link to="/PersonPage" className="card__img" onClick={()=> handleElement(item.id)}>
                {item.profile_path === null ? (
                    <img src="https://i.ibb.co/2t0SLBN/noimage.png" alt="" />
                ) : (
                    <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`} alt="Actor Profile" />
                )}
            </Link>
            <Link to="/MoviePageTv" className="card__name" onClick={()=> handleElement(item.id)}>{item.name}</Link>
            <div className={'card__average'}>Рейтинг: {item.popularity}</div>
            {/*<ul className={"card-person"}>*/}
            {/*    {item.known_for.map((item1, index1) => {*/}
            {/*        return (*/}
            {/*            <li key={index1}>{item1.title}</li>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</ul>*/}

            {/*<span className="card__date">{card.price}</span>*/}
        </div>
    );
}

export default CardPerson;