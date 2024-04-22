import {Medias} from "../models/Medias.js"
import {useState, useEffect} from "react"
import { Layout } from "../layout/Layout.jsx";

export function MostPopular(props){
    const [moviesDaily, setMoviesDaily] = useState([]);
    const [tvshowsDaily, setTVshowsDaily] = useState([]);
    const [moviesWeekly, setMoviesWeekly] = useState([]);
    const [tvShowsWeekly, setTVshowsWeekly] = useState([]);
    
    useEffect(() => { 
        Medias.showMostPopularMovies().then(res => setMoviesDaily(res));
        Medias.showMostPopularTVSeries().then(res => setTVshowsDaily(res));
        Medias.showMostPopularMovies().then(res => setMoviesWeekly(res));
        Medias.showMostPopularTVSeries().then(res => setTVshowsWeekly(res));
    }, []);

    return(<Layout 
        moviesDaily = {moviesDaily} tvshowsDaily = {tvshowsDaily}
        moviesWeekly= {moviesWeekly} tvShowsWeekly = {tvShowsWeekly}
        sortBy = {false}/>
    )
}