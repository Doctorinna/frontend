import React from "react";
import {createTheme} from "@mui/material";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        home1: React.CSSProperties;
        home2: React.CSSProperties;
        home3: React.CSSProperties;
        home4: React.CSSProperties;

    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        home1?: React.CSSProperties;
        home2?: React.CSSProperties;
        home3?: React.CSSProperties;
        home4?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        home1: true;
        home2: true;
        home3: true;
        home4: true;
    }
}
//1rem == 16px
export const THEME = createTheme({
    palette: {
        secondary: {
            //light: "#6562CE",
            main: "#6562CE"
        }
    },
    typography: {
        home1: {
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2rem",
            lineHeight: "2.5rem",
            color: "#424242"
        },
        home2: {
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "4rem",
            lineHeight: "5rem",
            color: "#5F5F5F"
        },
        home3: {
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.5rem",
            lineHeight: "1.875rem",
            color: "#5F5F5F"
        },
        home4: {
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "2rem",
            lineHeight: "2.375rem",
            color: "#000000"
        }
    }
});