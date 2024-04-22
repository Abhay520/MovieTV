import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function List(props){
    return(
        <>
            {props.movies.map((media, index) => (
                <Grid key = {media.id} height={300} width={300} my={4} 
                 alignItems="center"  align = "center"
                    sx={{ border: '2px solid teal' }}
                >
                    <Typography noWrap variant="subtitle1" component="div">
                        {index + 1 +  ". " + media.title}
                    </Typography>
                    {media.type === 'Movie' ? 
                    (
                        <Link to = {"/Movie/" + media.id}>
                            <img height={250} width={250} alt="green iguana" src= {media.posterUrl}/>
                        </Link>
                    ) : 
                    (
                        <Link to = {"/Tv/" + media.id}>
                            <img height={250} width={250} alt="green iguana" src= {media.posterUrl}/>
                        </Link>
                    )}
                </Grid>
        ))}
        </>
    )
}