import React from "react";
import {Box, Typography} from "@mui/material";
import {Statistics} from "../../redux/types/questions";
import {parseRisk} from "../../utils/risk";
import {purple} from "@mui/material/colors";


interface chartProps {
    stats: Statistics
}

const Chart: React.FC<chartProps> = ({stats}) => {
    const colors = [purple["900"], purple["700"], purple["500"],
        purple["300"], purple["100"], purple["50"]];
    let max = stats.country[0]?.avg_factor;
    stats.country.forEach((r) => {
        if (r.avg_factor > max) max = r.avg_factor;
    });
    const scale = (percent: number) => percent / parseRisk(max) * 100;

    return (<>
            {stats.country.map((r, index) => (
                <Box sx={{width: "100%"}}>
                    <Box key={r.region} sx={{
                        height: "100%",
                        width: scale(parseRisk(r.avg_factor)) + "%",
                        textAlign: "right",
                        backgroundColor: index < colors.length ? colors[index] : colors[colors.length - 1]
                    }}>
                        <Typography component={"div"} p={2.5} variant={"diseases4"}>{r.region}</Typography>
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default Chart;