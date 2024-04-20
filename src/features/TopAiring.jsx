import {Movies} from "../models/Movies.js"
import {useState, useEffect} from "react"
import { List } from "./List.jsx";
import Button from '@mui/material/Button';
import {Grid, Typography} from "@mui/material";

const stylesButtonContained = {
    variant : "contained",
    "backgroundColor" : "#008080"
}

const stylesButtonOutlined = {
    variant : "contained",
    "backgroundColor" : ""
}

export function TopAiring(){

    const [moviesDaily, setMoviesDaily] = useState([]);
    const [tvshowsDaily, setTVshowsDaily] = useState([]);
    const [moviesWeekly, setMoviesWeekly] = useState([]);
    const [tvShowsWeekly, setTVshowsWeekly] = useState([]);
    
    useEffect(() => { 
        Movies.showTrendingMoviesDay().then(res => setMoviesDaily(res));
        Movies.showTrendingTVSeriesDay().then(res => setTVshowsDaily(res));
        Movies.showTrendingMoviesWeek().then(res => setMoviesWeekly(res));
        Movies.showTrendingTVSeriesWeek().then(res => setTVshowsWeekly(res));
    }, []);

    const [tvVisible, setTvVisible] = useState(false);
    const [movieVisible, setMovieVisible] = useState(true);

    const [daily, setDaily] = useState(true);
    const [weekly, setWeekly] = useState(false);

    return(
        <>
            <Grid container height = {100} rowSpacing={4} alignItems="center" justifyContent = "space-evenly" style={{ display: "flex" }} direction="row">
                <Grid item xs = {2}>
                    <Button style = {{"backgroundColor" : "#008080"}} className="TVMChoice" onClick = {(e) => {setTvVisible(false);setMovieVisible(true);}} size="large" variant="contained">Movies</Button>
                </Grid>
                <Grid item xs = {2}>
                    <Button className="TVMChoice" onClick = {() => {setTvVisible(true);setMovieVisible(false)}} size="large" variant="outlined">TV Shows</Button>
                </Grid>
            </Grid>
            <Grid container height = {100} rowSpacing={4} alignItems="center" justifyContent = "flex-end" style={{ display: "flex" }} direction="row">

                <Grid item xs = {6}>
                    <Typography align = "right" fontFamily = "roboto" variant = "h6"  >SORT BY: </Typography>
                </Grid>
                <Grid item xs = {2} margin={2}>
                    <Button  onClick = {() => {setWeekly(false);setDaily(true)}} variant="outlined" >DAY</Button>
                    <Button  onClick = {() => {setWeekly(true);setDaily(false)}} variant="outlined">WEEK</Button>
                </Grid>
            </Grid>
            {tvVisible ? (daily ? <List movies = {tvshowsDaily}/> : null) : null}
            {tvVisible ? (weekly ? <List movies = {tvShowsWeekly}/> : null) : null}
            {movieVisible ? (daily ? <List movies = {moviesWeekly}/> : null) : null}
            {movieVisible ? (weekly ? <List movies = {moviesDaily}/> : null) : null}
        </>
    );
}