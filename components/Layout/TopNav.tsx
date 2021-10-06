import React from "react";
import {Box, Grid, Typography} from "@mui/material";

interface TopNav {
    chosen: string
}

const TopNav: React.FC<TopNav> = ({chosen}) => {
    const titles = ["Personal", "Habits", "Heart", "Breath", "Residence"];
    return (
        <Box sx={{
            boxShadow: "0px 2px 4px rgba(38, 50, 56, 0.16), 0px 4px 8px rgba(38, 50, 56, 0.08)"
        }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {titles.map((val, ind) => (
                    <>
                        <Grid item key={val} m={3}>
                            <Typography variant={chosen === val ? "questionTopNav2" : "questionTopNav1"}
                                        component="div">{val}</Typography>
                        </Grid>
                        <Grid item key={ind}>
                            {ind !== titles.length - 1 ?
                                <Typography variant="questionTopNav3" component="div" sx={{marginBottom: "0.5rem"}}>.</Typography>
                                : null
                            }
                        </Grid>
                    </>
                ))}
            </Grid>
        </Box>
    );
};

export default TopNav;