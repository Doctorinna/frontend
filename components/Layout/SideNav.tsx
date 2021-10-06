import React from "react";
import {Box, Grid, Typography} from "@mui/material";

interface SideNavProps {
    underline: number
}
const SideNav:React.FC<SideNavProps> = ({underline}) => {
    const vector = "/Vector.png";
    const links = ["Start", "Questionnaire", "Results", "Overview"];
    return (
        <Box style={{backgroundColor: "#CBE1FD"}} p={5}>
            <Box mb={10}>
                <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"} >
                    <Grid item>
                        <img src={vector} style={{height: "1.5rem", marginTop: "0.5rem"}} alt="heart"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="questionSideNav1" component="div">Doctorinna</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container direction="column" alignItems="center" justifyContent="space-evenly">
                {links.map((v,ind)=>(
                    <Grid item key={ind} m={5}>
                        <Typography
                            variant={underline === ind+1 ? "questionSideNav3" : "questionSideNav2"}
                            component="div"
                        >{v}</Typography>
                    </Grid>
                ))}

            </Grid>
        </Box>

    );
};

export default SideNav;