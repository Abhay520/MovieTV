import {Movies} from "../models/Movies.js"
import {useState, useEffect} from "react"
import { List } from "./List.jsx";

export function RecentMovies(props){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => { 
        Movies.showTrendingMoviesWeek().then(res => setMovies(res));
    }, []);

    return(<List movies = {movies}/>);
}