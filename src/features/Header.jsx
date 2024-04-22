import { AppBar,Toolbar, Typography, Grid} from "@mui/material";
import { Link } from "react-router-dom";
  

export function Header(){
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container direction = "row">
                        <Grid item xs = {6}>
                            <Typography color = {"white"} fontFamily={"roboto"} variant="h4">MovieTV</Typography>
                        </Grid>
                        <Grid item xs = {6} container justifyContent="space-evenly">
                            <Grid item>
                                <Link to="/MostPopular"><Typography color = {"white"} fontFamily={"roboto"} variant="h5">Most Popular</Typography></Link>
                            </Grid>
                            <Grid item>
                                <Link to="/HighestRated"><Typography color = {"white"} fontFamily={"roboto"} variant="h5">Highest Rated</Typography></Link>
                            </Grid>
                            <Grid item>
                                <Link to="/TopAiring"><Typography  color = {"white"} fontFamily={"roboto"} variant="h5">Trending</Typography></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                </Toolbar>
            </AppBar>
        </>
    )
}