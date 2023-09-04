import {Link} from "react-router-dom";
import './CardVideo.scss'



function CardVideo({item, handleElement}) {
    const handleVideo = () => {
        window.open(`https://www.youtube.com/watch?v=${item.key}`, '_blank');

    }
    return (
        <div className={"video__card"}>
            <div className='video__title'>{item.name}</div>
            <Link className="video__img hover-img" onClick={handleVideo}>
                {item.profile_path === null ? (
                    <img src="https://i.ibb.co/2t0SLBN/noimage.png" alt="" />
                ) : (
                    <img src={`https://img.youtube.com/vi/${item.key}/0.jpg`} alt="" />
                )}
            </Link>
        </div>
    );
}

export default CardVideo;