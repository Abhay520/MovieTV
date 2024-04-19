import {Movies} from "../models/Movies.js"
import {useState, useEffect} from "react"
import { List } from "./List.jsx";
import { Grid } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function TopAiring(){

    const [movies, setMovies] = useState([]);
    const [tvshows, setTVshows] = useState([]);
    
    useEffect(() => { 
        Movies.showTrendingMoviesDay().then(res => setMovies(res));
        Movies.showTrendingTVSeriesDay().then(res => setTVshows(res));
    }, []);

    const [tvVisible, setTvVisible] = useState(false);
    const [movieVisible, setMovieVisible] = useState(true);

    return(
        <>
            <Stack spacing={2} direction="row">
                <Button onClick = {() => {setTvVisible(false);setMovieVisible(true)}} variant="outlined">Movies</Button>
                <Button onClick = {() => {setTvVisible(true);setMovieVisible(false)}} variant="outlined">TV Shows</Button>
            </Stack>
            {tvVisible ? <List movies = {tvshows}/> : null}
            {movieVisible ? <List movies = {movies}/> : null}
        </>
    );
}