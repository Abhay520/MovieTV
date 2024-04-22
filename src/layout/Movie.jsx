import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import { Grid, Typography } from "@mui/material";
import { Medias } from "../models/Medias";

const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    m = m < 10 ? '0' + m : m;
    return `${h}h ${m} mins`;
}

const maxChar = 500;

export function Movie(){
    let {id} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        Medias.showMovie(id).then(res => setMovie(res));
    },[id]);

    return(
        <>
            <Grid height={300} width={300} mx={5} my={10} align ="center">
                <img style = {{margin: 'auto',maxWidth: '100%',maxHeight: '100%',}}
                    alt="green iguana" src= {movie.posterUrl}/>
            </Grid>
            <Grid height={300}  width={500}
                    sx={{ border: '2px solid white' }}>
                <Typography variant="h5">
                        {movie.title}<br/><br/>
                </Typography>
                {movie.overview?.length > maxChar ? 
                (
                    <Typography variant="h7">{movie.overview.substring(0, maxChar) + " . . ."}</Typography>
                ) : 
                (
                    <Typography variant="h7">{movie.overview}</Typography>
                )}
            </Grid>
            <Grid mx={5} height={300} width={300}
                    sx={{ border: '2px solid white' }}>
                <Typography fontFamily = "roboto" variant="h6">
                        Runtime : {convertMinsToHrsMins(movie.runtime)} <br/>
                </Typography>
                <Typography fontFamily = "roboto" variant="h6">
                        Release date : {movie.release_date}
                </Typography>
                <Typography fontFamily = "roboto" variant="h6">
                        Genres : 
                </Typography>
                <Grid container direction = "row">
                    {movie.genres?.map(function(genre){
                        return (
                            <Grid mx = {0.5} my = {0.5} xs = {"auto" } item  key = {genre.id} textAlign = "center" sx={{ border: '2px solid grey', borderRadius: '16px' }}>
                                <Typography>&nbsp;{genre.name}&nbsp;</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                {movie.budget === 0 ? null : (
                    <Typography fontFamily = "roboto" variant="h6">
                        Budget : $ {new Intl.NumberFormat('en-US').format(movie.budget)}
                    </Typography>)}
                {movie.revenue === 0 ? null : (
                    <Typography fontFamily = "roboto" variant="h6">
                        Revenue : $ {new Intl.NumberFormat('en-US').format(movie.revenue)}
                    </Typography>)}
            </Grid>
        </>
    )
}