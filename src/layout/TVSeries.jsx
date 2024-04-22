import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import { Grid, Typography } from "@mui/material";
import { Medias } from "../models/Medias";

const maxChar = 500;

export function TVSeries(){
    let {id} = useParams();
    const [tvSeries, setTvSeries] = useState([]);

    useEffect(() => {
        Medias.showTVSeries(id).then(res => setTvSeries(res));
    },[id]);

    return(
        <>
            <Grid height={300} width={300} mx={5} my={10} align ="center">
                <img style = {{margin: 'auto',maxWidth: '100%',maxHeight: '100%',}}
                    alt="green iguana" src= {tvSeries.posterUrl}/>
            </Grid>
            <Grid height={300}  width={500}
                    sx={{ border: '2px solid white' }}>
                <Typography variant="h5">
                        {tvSeries.name}<br/><br/>
                </Typography>
                {tvSeries.overview?.length > maxChar ? 
                (
                    <Typography variant="h7">{tvSeries.overview.substring(0, maxChar) + " . . ."}</Typography>
                ) : 
                (
                    <Typography variant="h7">{tvSeries.overview}</Typography>
                )}
            </Grid>
            <Grid mx={5} height={300} width={300}
                    sx={{ border: '2px solid white' }}>
                <Typography fontFamily = "roboto" variant="h6">
                    First air date : {tvSeries.firstAirDate}
                </Typography>
                <Typography fontFamily = "roboto" variant="h6">
                        Genres : 
                </Typography>
                <Grid container direction = "row">
                    {tvSeries.genres?.map(function(genre){
                        return (
                            <Grid mx = {0.5} my = {0.5} xs = {"auto" } item  key = {genre.id} textAlign = "center" sx={{ border: '2px solid grey', borderRadius: '16px' }}>
                                <Typography>&nbsp;{genre.name}&nbsp;</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                <Typography fontFamily = "roboto" variant="h6">
                        Number of seasons: {tvSeries.numberOfSeasons} <br/>
                </Typography>
                <Typography fontFamily = "roboto" variant="h6">
                        Number of episodes: {tvSeries.numberOfEpisodes} <br/>
                </Typography>
                <Typography fontFamily = "roboto" variant="h6">
                        Status: {tvSeries.status} <br/>
                </Typography>
            </Grid>
        </>
    )
}