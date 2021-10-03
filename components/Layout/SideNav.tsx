import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";

interface SideNavProps {
    underline: number
}
const SideNav:React.FC<SideNavProps> = ({underline}) => {
    const vector = "Vector.png";
    const links = ["Start", "Questionnaire", "Results", "Overview"];
    return (
        <Box style={{backgroundColor: "#CBE1FD"}} p={5}>
            <Box mb={10}>
                <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"} >
                    <Grid item>
                        <img src={vector} style={{width: "1.5rem", height: "1.5rem"}} alt="heart"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="div">Doctorinna</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container direction="column" alignItems="center" justifyContent="space-evenly">
                {links.map((v,ind)=>(
                    <Grid item key={ind}>
                        <Typography style={{textDecorationLine: underline === ind+1 ? "underline" : "none"}} variant="h4" component="div">{v}</Typography>
                    </Grid>
                ))}

            </Grid>
        </Box>

    );
};

export default SideNav;