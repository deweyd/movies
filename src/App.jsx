import './App.css'
import SearchPage from "./assets/Pages/Genre/index.js";
import GenreTv from "./assets/Pages/GenreTv/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./assets/components/Header/Header.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";

import {useSelector} from "react-redux";
import Home from "./assets/Pages/Home/Home.jsx";
import HomePage from "./assets/Pages/HomePage/HomePage.jsx";
import {useState} from "react";
import Person from "./assets/Pages/Person/index.js";
import PersonPage from "./assets/Pages/PersonPage/index.js";
import MoviePageTv from "./assets/Pages/MoviePageTv/index.js";
import Genre from "./assets/Pages/Genre/Genre.jsx";
import MoviePage from "./assets/Pages/MoviePage/index.js";
import ScrollToTop from "react-scroll-to-top";


function App(isLoading ) {
    const {data, dataSection} = useSelector((state) => state.todos)
  return (
        <div className='App'>
            <ScrollToTop smooth color="#6f00ff" />
            <Header/>
            <div className="container-wrap">
                <Routes>
                    <Route exact path="/MoviePage" element={<MoviePage/>}/>
                    <Route exact path="/MoviePageTv" element={<MoviePageTv/>}/>
                    <Route exact path="/PersonPage" element={<PersonPage/>}/>
                    <Route exact path="/Person" element={<Person/>}/>
                    <Route exact path="/TV" element={<GenreTv/>}/>
                    <Route exact path="/Genre" element={<Genre/>}/>
                    <Route exact path="/SearchPage" element={<SearchPage/>}/>
                    <Route path="/HomePage" element={<HomePage data={dataSection}/>}>
                        {/*<Users />*/}
                    </Route>
                    <Route exact path="/" element={<Home data={data}/>}/>
                </Routes>
            </div>
            <Footer/>

        </div>
  )
}

export default App
