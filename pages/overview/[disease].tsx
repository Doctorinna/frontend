import React, {useEffect} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Chart from "../../components/Question/Chart";
import {parseRisk} from "../../utils/risk";

const Disease: React.FC = () => {
    const {query} = useRouter();
    const {disease} = query;
    const {fetchStatistics} = useActions();
    const {results, statistics} = useTypedSelector(state => state.questions);
    const index = results.findIndex((v) => v.disease.illness === disease);
    const result = results[index];
    useEffect(() => {
        fetchStatistics(disease as string);
    }, []);
    return (
        <Box>
            <Box mb={10}>
                <Grid container alignItems={"flex-start"} justifyContent={"flex-start"} direction={"row"}>
                    <Grid item>
                        <img src={"/Vector.png"} style={{height: "1.5rem", marginTop: "0.5rem"}} alt="heart"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="questionSideNav1" component="div">Doctorinna</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="home3" component="div">
                    {result.disease.illness + ". Risk is " + parseRisk(result.risk_factor) + "%"}
                </Typography>
            </Box>
            <Box>
                <Typography variant="home3" component="div">
                    {result.prescription}
                </Typography>
            </Box>
            <Box>
                <Grid container direction={"row"}>
                    <Grid item xs={5} p={3}>
                        <Typography variant="home3" component="div">
                            {result.disease.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Chart stats={statistics}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Disease;