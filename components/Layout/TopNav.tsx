import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";

interface TopNav {
    chosen: string
}
const TopNav:React.FC<TopNav> = ({chosen}) => {
    const titles = ["Personal", "Habits", "Heart", "Breath", "Residence"];
    return (
        <Box style={{boxShadow: "60px 0px black"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {titles.map((val,ind)=>(
                    <Grid item key={ind}>
                        <Typography style={{backgroundColor: chosen===val ? "black" : "#6562CE"}} variant="h4" component="div">{val}</Typography>
                        {ind !== titles.length - 1 ?
                            <Typography style={{backgroundColor: "#EFAF00"}} variant="h1" component="div">.</Typography>
                            : null
                        }
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TopNav;