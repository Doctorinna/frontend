import 'jsdom-global/register';
import React from "react";
import {ReactWrapper, shallow, mount, ShallowWrapper} from "enzyme";
import Navigation from "../components/Navigation/Navigation";
import {AppBar, Grid} from "@mui/material";
import Index from "../pages/index";
import QuestionPage from "../pages/question/[id]";
import TopNav from "../components/Layout/TopNav";
import QuestionnaireHoc from "../components/hoc/QuestionnaireHOC";
import {Provider} from "react-redux";
import {makeStore, wrapper} from "../redux/store";

describe("Pages", ()=>{
    describe("Index page", ()=>{
        it("Appbar exist", ()=>{
            const wrapper: ShallowWrapper = shallow(<Navigation/>);
            const contains = wrapper.find(AppBar);
            expect(contains).toHaveLength(1);
        })
        it("All Grid components in root page are rendered", ()=>{
            const wrapper: ReactWrapper = mount(<Provider store={makeStore()}>
                <Index/>
            </Provider>);
            const grid_number = wrapper.find(Grid).length;
            expect(grid_number).toEqual(16);
        })
        it("All Grid components in questionnaire HOC are rendered", ()=>{
            const wrapper: ReactWrapper = mount(<QuestionnaireHoc underline={2}/>);
            const grid_number = wrapper.find(Grid).length;
            expect(grid_number).toEqual(11);
        })
    })
})