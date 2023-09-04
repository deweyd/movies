import './Main.scss'
import Selection from "../Selection/index.jsx";
import Box from "../Box/index.jsx";


const Main = props => {
    return (
        <main className={"content__main"}>
            <Box/>
            <Selection data={props.data}/>
        </main>
    );
}

export default Main;