import React from "react";
import Navigation from "./Navigation";

const Layout: React.FC = (props) => {
    return (
        <React.Fragment>
            <Navigation/>
            {props.children}
        </React.Fragment>
    );
};

export default Layout;