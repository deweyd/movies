import './Content.scss'
import Main from "../Main/index.jsx";
import Aside from "../Aside/index.jsx";
import data from './../../data.jsx';

function Content() {
    return (
        <div className={"content"}>
            <Main data={data}/>
            <Aside/>
        </div>
    );
}

export default Content;