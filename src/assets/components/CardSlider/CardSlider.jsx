import {Link} from "react-router-dom";
import './CardSlider.scss'



function CardSlider({card, handleItem}) {
    return (
        <div className={"content__card card"}>
            <Link className="card__img" to="/MoviePage" onClick={()=> handleItem(card.id)}>
                {card.poster_path === null ? (
                    <img src="https://i.ibb.co/2t0SLBN/noimage.png" alt="" />
                ) : (
                    <img src={`https://image.tmdb.org/t/p/w500${card.poster_path || card.backdrop_path}`}/>
                )}
            </Link>
            <Link className="card__name" to="/MoviePage" onClick={()=> handleItem(card.id)}>{card.title}</Link>
        </div>
    );
}

export default CardSlider;