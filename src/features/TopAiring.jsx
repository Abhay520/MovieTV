import {Medias} from "../models/Medias.js"
import {useState, useEffect} from "react"
import {Layout} from "../layout/Layout.jsx"

export function TopAiring(){

    const [moviesDaily, setMoviesDaily] = useState([]);
    const [tvshowsDaily, setTVshowsDaily] = useState([]);
    const [moviesWeekly, setMoviesWeekly] = useState([]);
    const [tvShowsWeekly, setTVshowsWeekly] = useState([]);
    
    useEffect(() => { 
        Medias.showTrendingMoviesDay().then(res => setMoviesDaily(res));
        Medias.showTrendingTVSeriesDay().then(res => setTVshowsDaily(res));
        Medias.showTrendingMoviesWeek().then(res => setMoviesWeekly(res));
        Medias.showTrendingTVSeriesWeek().then(res => setTVshowsWeekly(res));
    }, []);

    return(<Layout 
        moviesDaily = {moviesDaily} tvshowsDaily = {tvshowsDaily}
        moviesWeekly= {moviesWeekly} tvShowsWeekly = {tvShowsWeekly}
        sortBy = {true}/>
    )
    
}