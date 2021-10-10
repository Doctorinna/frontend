import React from "react";
import {Box, Typography} from "@mui/material";
import {Statistics} from "../../redux/types/questions";
import {parseRisk} from "../../utils/risk";
import {width} from "@mui/system";
import {purple} from "@mui/material/colors";


interface chartProps {
    stats: Statistics
}

const Chart: React.FC<chartProps> = ({stats}) => {
    //https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl
    const colors = [purple["900"], purple["800"], purple["700"], purple["600"], purple["500"],
        purple["400"], purple["300"], purple["200"], purple["100"], purple["50"]];
    return (
        <Box>
            {stats.country.map((r, index) => (
                <Box sx={{width: "100%", backgroundColor: "#e0e0de"}}>
                    <Box key={r.region} sx={{
                        height: "100%",
                        width: parseRisk(r.avg_factor) + "%",
                        textAlign: "right",
                        backgroundColor: index < colors.length ? colors[index] : colors[colors.length - 1]
                    }}>
                        <Typography component={"div"} p={1.5}>{r.region}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>

    );
};

export default Chart;