import React from "react";
import {Grid, Typography} from "@mui/material";

const Results: React.FC = () => {
    const risks = ["a", "b", "c", "d"];
    //todo icon strelka vpravo
    return (
        <Grid container direction="column">
            <Grid container direction="row">
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <img src="" alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">CARDIOVASCULAR DISEASE</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">{risks[0]}</Typography>
                    </Grid>
                </Grid>


                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <img src="" alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">LUNG CANCER</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">{risks[1]}</Typography>
                    </Grid>

                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <img src="" alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">STROKE</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">{risks[2]}</Typography>
                    </Grid>

                </Grid>
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <img src="" alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">DIABETES</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{}} variant="h4" component="div">{risks[3]}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Results;