import { AppBar,Toolbar, Typography, Grid} from "@mui/material";
import { Link } from "react-router-dom";
  

export function Header(){
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container justifyContent="center">
                        <Grid item xs = {2}>
                            <Typography color = {"white"} fontFamily={"roboto"} variant="h4">MovieTV</Typography>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                        <Grid item xs >
                            <Link to="/RecentMovies"><Typography color = {"white"} fontFamily={"roboto"} variant="h5">Movies</Typography></Link>
                        </Grid>
                        <Grid item xs>
                        <Link to="/RecentTv"><Typography color = {"white"} fontFamily={"roboto"} variant="h5">TV Series</Typography></Link>
                        </Grid>
                        <Grid item xs>
                        <Link to="/MostPopular"><Typography color = {"white"} fontFamily={"roboto"} variant="h5">Most Popular</Typography></Link>
                        </Grid>
                        <Grid item xs>
                        <Link to="/TopAiring"><Typography  color = {"white"} fontFamily={"roboto"} variant="h5">Top Airing</Typography></Link>
                        </Grid>
                    </Grid>
                   
                </Toolbar>
            </AppBar>
        </>
    )
}