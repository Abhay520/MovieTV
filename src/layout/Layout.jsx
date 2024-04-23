import {useState} from "react"
import { List } from "./List"
import Button from '@mui/material/Button';
import {Grid, Typography} from "@mui/material";

const movieTvButtonStyle = (active) => {
    if(active){
        return{
            variant : "contained", "backgroundColor" : "#008080"
        }
    }
    else{
        return{
            variant : "outlined"
        }
    }
}

export function Layout(props){
    const [movieVisible, setMovieVisible] = useState(true);
    const [tvVisible, setTvVisible] = useState(false);

    const [daily, setDaily] = useState(true);
    const [weekly, setWeekly] = useState(false);

    return(
        <>
            <Grid container height = {100} rowSpacing={4} alignItems="center" justifyContent = "space-evenly" style={{ display: "flex" }} direction="row">
                <Grid item xs = {2}>
                    <Button style = {movieTvButtonStyle(movieVisible)} className="TVMChoice" onClick = {(e) => {
                        setTvVisible(false);setMovieVisible(true);
                    }} size="large" variant="contained">Movies</Button>
                </Grid>
                <Grid item xs = {2}>
                    <Button style = {movieTvButtonStyle(tvVisible)} className="TVMChoice" onClick = {() => {
                        setTvVisible(true);setMovieVisible(false);
                    }} size="large" variant="contained">TV Shows</Button>
                </Grid>
            </Grid>

            {props.sortBy ?
                (<Grid container height = {100} rowSpacing={4} alignItems="center" justifyContent = "flex-end" style={{ display: "flex" }} direction="row">
                    <Grid item xs = {6}>
                        <Typography align = "right" fontFamily = "roboto" variant = "h6"  >SORT BY: </Typography>
                    </Grid>
                    <Grid item xs = {2} margin={2}>
                        <Button  style = {movieTvButtonStyle(daily)} onClick = {() => {
                            setWeekly(false);setDaily(true);
                        }} variant="outlined" >DAY</Button>
                        <Button  style = {movieTvButtonStyle(weekly)} onClick = {() => {
                            setWeekly(true);setDaily(false);
                        }} variant="outlined">WEEK</Button>
                    </Grid>
                </Grid>) 
            : null}
            {tvVisible ? (daily ? <List movies = {props.tvshowsDaily}/> : null) : null}
            {tvVisible ? (weekly ? <List movies = {props.tvShowsWeekly}/> : null) : null}
            {movieVisible ? (daily ? <List movies = {props.moviesDaily}/> : null) : null}
            {movieVisible ? (weekly ? <List movies = {props.moviesWeekly}/> : null) : null}
        </>
    );
}