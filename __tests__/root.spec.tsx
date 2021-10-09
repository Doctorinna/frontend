import 'jsdom-global/register';
import React from "react";
import {ReactWrapper, shallow, mount, ShallowWrapper} from "enzyme";
import Navigation from "../components/Navigation/Navigation";
import {AppBar, Grid} from "@mui/material";
import Index from "../pages/index";
import classes from "../components/Navigation/Navigation.module.scss";

describe("Pages", ()=>{
    describe("Index page", ()=>{
        it("Appbar exist", ()=>{
            const wrapper: ShallowWrapper = shallow(<Navigation/>);
            const contains = wrapper.find(AppBar);
            expect(contains).toHaveLength(1);
        })
        it("All Grid components are rendered", ()=>{
            const wrapper: ReactWrapper = mount(<Index/>);
            const grid_number = wrapper.find(Grid).length;
            expect(grid_number).toEqual(14);
        })
    })
})