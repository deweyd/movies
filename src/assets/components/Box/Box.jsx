import './Box.scss'
import Slider_main from "../Slider_main/index.jsx";
import TextBox from "../Text-box/index.jsx";
import Breadcrumb from "../Breadcrumb/index.jsx";



const Box = () => {
    return (
        <div className="content__box box">
            {/*<Breadcrumb/>*/}
            <Slider_main/>
            <TextBox/>
        </div>
    );
}

export default Box;