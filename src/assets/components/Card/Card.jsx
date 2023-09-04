import {Link} from "react-router-dom";
import './Card.scss'



function Card({item, handleItem, patch}) {
    return (
        <div className={"content__card card hover-img"}>
            <Link className="card__img" to={patch} onClick={()=> handleItem(item.id)}>
                {item.poster_path === null ? (
                    <img  src="https://i.ibb.co/2t0SLBN/noimage.png" alt="" />
                ) : (
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}/>
                )}
            </Link>
            <Link className="card__name">{item.title}</Link>
            <div className={'card__average'}>Рейтинг: {item.vote_average}</div>
            {/*<span className="card__date">{card.price}</span>*/}
        </div>
    );
}

export default Card;