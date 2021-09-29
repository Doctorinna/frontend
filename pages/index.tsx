import React from "react";
import {Card, CardContent, CardMedia, Grid, Typography, Button, CardActions} from "@material-ui/core";
import Image from "material-ui-image";
import {useRouter} from "next/router";
const Index:React.FC = () => {
    const router = useRouter();
    const start = () => {
        router.push("/question/0");
    }
    return (
        <Grid container alignItems={"center"} justifyContent={"flex-start"} direction={"column"} >
            <Grid item justifyContent={"center"} alignItems={"center"} direction={"column"}>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="../assets/svg/Drawkit-Vector-Illustration-Medical-13.svg"
                        alt="layout doctor"
                    />
                    <CardContent>
                        <Grid container alignItems={"center"} justifyContent={"flex-start"} direction={"column"} >
                            <Grid item justifyContent={"flex-start"} alignItems={"flex-start"} direction={"row"}>
                                <Image src="../assets/Vector.png"/>
                        <Typography gutterBottom variant="h5" component="div">Doctorinna</Typography>
                            </Grid>
                            <Grid item justifyContent="center" direction="row" alignItems="center">
                                <Typography gutterBottom variant="h5">
                                    D
                                    <Image src="../assets/Vector.png"/>
                                    ctorinna
                                </Typography>
                            </Grid>
                            <Grid item justifyContent="center" direction="row" alignItems="center">
                                <Typography variant="body1">
                                    Medical risk factor analyzer
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button color="secondary" variant="contained" onClick={start}>Start</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid>
            </Grid>
        </Grid>
    );
};

export default Index;