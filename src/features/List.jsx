import { Grid, Typography } from "@mui/material";

export function List(props){
    return(
        <>
            {props.movies.map((movie, index) => (
                <Grid key = {movie.title} height={300} width={300} my={4} 
                 alignItems="center"  align = "center"
                    sx={{ border: '2px solid white' }}
                >
                    <Typography noWrap variant="subtitle1" component="div">
                        {index + 1 +  ". " + movie.title}
                    </Typography>
                    <img height={250} width={250} alt="green iguana" src= {movie.posterUrl}/>
                </Grid>
        ))}
        </>
    )
}