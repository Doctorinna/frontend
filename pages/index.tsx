import React from "react";
import {Grid, Typography, Button, Box} from "@material-ui/core";
import {useRouter} from "next/router";

const Index: React.FC = () => {
    const router = useRouter();
    const start = () => {
        router.push("/question/0");
    }
    const vector = "Vector.png";
    const illustration = "PNG/Drawkit-Vector-Illustration-Medical-13.png";
    return (
        <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
            <Grid item justifyContent={"center"} alignItems={"center"} direction={"column"} spacing={3}>
                <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                    <Grid item>
                        <img src={vector} style={{width: "1.5rem", height: "1.5rem"}} alt="heart"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="div">Doctorinna</Typography>
                    </Grid>
                </Grid>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Typography variant="h5">D</Typography>
                    </Grid>
                    <Grid item>

                        <img src={vector} style={{width: "1.5rem", height: "1.5rem"}} alt="heart"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">ctorinna</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                    <Grid item justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="body1">
                            Medical risk factor analyzer
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                    <Grid item>
                        <Button style={{color: "#6562CE"}} variant="contained" onClick={start}>Start</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Box style={{backgroundColor: "#CBE1FD"}}>
                    <img src={illustration} alt="doctor"/>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Index;