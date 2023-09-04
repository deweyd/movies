import {Link, useNavigate} from "react-router-dom";
import './ScrollToTop.scss'
import { useEffect } from 'react';



function ScrollToTop1() {
    const navigate = useNavigate();

    useEffect(() => {
        const unlisten = navigate.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [navigate]);

    return null;
}

export default ScrollToTop1;