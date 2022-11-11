import {Link} from "react-router-dom";
import "./intro.css"

const Intro = () => {
    return(
        <>
            <Link to="/vraag/1" className="button" >Start</Link>
        </>
    );
}

export default Intro;