import React, {useEffect} from "react";
import {Grid, Typography} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Link from "next/link";
import {concatInOneString, parseRisk} from "../../utils/risk";

const Results: React.FC = () => {
    const state = useTypedSelector(state => state.questions);
    const {fetchResults} = useActions();
    useEffect(()=>{
        fetchResults();
    },[])
    const srcImage = (disease: string) => {
        if(disease === "diabetes")return "/diabetes.png";
        if(disease === "cardiovascular disease")return "/cardiovascular.png";
        if(disease === "stroke")return "/stroke.png";
        return "";

    }
    const results = state.results;
    return (
            <Grid container direction="row" justifyContent={"center"}>
                {results.map((r)=>(
                    <Link href={"/overview/" + concatInOneString(r.disease.illness)} key={r.disease.illness}>
                        <a>
                            <Grid container direction="column" alignItems="center" justifyContent="center" xs={6}>
                                <Grid item m={2}>
                                    <img src={srcImage(r.disease.illness)} alt={r.disease.illness}/>
                                </Grid>
                                <Grid item m={2}>
                                    <Typography variant="results1" component="div">{r.disease.illness}</Typography>
                                </Grid>
                                <Grid item m={2}>
                                    <Typography variant="h4" component="div">{parseRisk(r.risk_factor) + "%"}</Typography>
                                </Grid>
                            </Grid>
                        </a>
                    </Link>
                ))}
            </Grid>
    );
};

export default Results;