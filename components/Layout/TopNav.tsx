import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface TopNav {
    chosen: string
}

const TopNav: React.FC<TopNav> = ({chosen}) => {
    const {categories} = useTypedSelector(state => state.questions);
    return (
        <Box sx={{
            boxShadow: "0px 2px 4px rgba(38, 50, 56, 0.16), 0px 4px 8px rgba(38, 50, 56, 0.08)"
        }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {categories.map((val, ind) => (
                    <React.Fragment key={val.id}>
                        <Grid item m={3}>
                            <Typography sx={{textTransform: "capitalize"}} variant={chosen === val.title ? "questionTopNav2" : "questionTopNav1"}
                                        component="div">{val.title}</Typography>
                        </Grid>
                        <Grid item>
                            {ind !== categories.length - 1 ?
                                <Typography variant="questionTopNav3" component="div" sx={{marginBottom: "0.5rem"}}>.</Typography>
                                : null
                            }
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default TopNav;