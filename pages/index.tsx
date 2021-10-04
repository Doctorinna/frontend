import React from "react";
import {Grid, Typography, Button, Box} from "@mui/material";
import {useRouter} from "next/router";
import styles from "../styles/Home.module.scss";

const Index: React.FC = () => {
    const router = useRouter();
    const start = () => {
        router.push("/question/0");
    }
    const vector = "Vector.png";
    const illustration = "PNG/Drawkit-Vector-Illustration-Medical-13.png";
    return (
        <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
            <Grid item xs={8}>
                <Box p={6}>
                    <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                        <Grid item>
                            <img src={vector} style={{height: "1.5rem", marginTop: "0.5rem"}} alt="heart"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="home1" component="div">Doctorinna</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={26} pl={8}>
                    <Grid container direction={"row"}>
                        <Grid item>
                            <Typography variant="home2" component="div">D</Typography>
                        </Grid>
                        <Grid item>
                            <img src={vector} style={{height: "4rem", marginTop: "0.5rem"}} alt="heart"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="home2" component="div">ctorinna</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box pl={9}>
                    <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                        <Grid item>
                            <Typography variant="home3" component="div">
                                Medical risk factor analyzer
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box pl={10} mt={10}>
                    <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                        <Grid item>
                            <Button sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                                lineHeight: "3.5rem",
                                color: "#FFFFFF"
                            }} variant="contained" color="secondary" onClick={start}>Start</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{backgroundColor: "#CBE1FD"}}>
                    <img src={illustration} alt="doctor" style={{width: "100%", height: "100%"}}/>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Index;