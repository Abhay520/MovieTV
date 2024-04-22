import {Medias} from "../models/Medias.js"
import {useState, useEffect} from "react"
import {Layout} from "../layout/Layout.jsx"

export function HighestRated(props){
    const [moviesDaily, setMoviesDaily] = useState([]);
    const [tvshowsDaily, setTVshowsDaily] = useState([]);
    const [moviesWeekly, setMoviesWeekly] = useState([]);
    const [tvShowsWeekly, setTVshowsWeekly] = useState([]);
    
    useEffect(() => { 
        Medias.showHighestRatedMovies().then(res => setMoviesDaily(res));
        Medias.showHighestRatedTVSeries().then(res => setTVshowsDaily(res));
        Medias.showHighestRatedMovies().then(res => setMoviesWeekly(res));
        Medias.showHighestRatedTVSeries().then(res => setTVshowsWeekly(res));
    }, []);

    return(<Layout 
        moviesDaily = {moviesDaily} tvshowsDaily = {tvshowsDaily}
        moviesWeekly= {moviesWeekly} tvShowsWeekly = {tvShowsWeekly}
        sortBy = {false}/>
    )
}