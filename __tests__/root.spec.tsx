import React from "react";
import {render, ReactWrapper, shallow, mount, ShallowWrapper} from "enzyme";
import Navigation from "../components/Navigation/Navigation";
import {AppBar} from "@material-ui/core";

describe("Pages", ()=>{
    describe("Root", ()=>{
        it("Appbar is exist", ()=>{
            const wrap: ShallowWrapper = shallow(<Navigation/>);
            const appbar = wrap.contains(<AppBar/>);
            expect(appbar).toBe(true);
        })
    })
})