import 'jsdom-global/register';
import React from "react";
import {ReactWrapper, shallow, mount, ShallowWrapper} from "enzyme";
import {Box, Grid} from "@mui/material";
import Index from "../pages/index";
import QuestionnaireHoc from "../components/hoc/QuestionnaireHOC";
import {Provider} from "react-redux";
import {makeStore} from "../redux/store";
import Layout from "../components/Layout/Layout";
jest.useFakeTimers()

describe("Pages", ()=>{
    describe("Index page", ()=>{
        it("All Grid components in root page are rendered", ()=>{
            const wrapper: ReactWrapper = mount(<Provider store={makeStore()}>
                <Index/>
            </Provider>);
            const grid_number = wrapper.find(Grid).length;
            expect(grid_number).toEqual(16);
        });
        it("Layout is rendered", ()=>{
            const wrapper: ShallowWrapper = shallow(<Layout/>);
            const box_number = wrapper.find(Box).length;
            expect(box_number).toEqual(2);
        })
        it("All Grid components in questionnaire HOC are rendered", ()=>{
            const wrapper: ReactWrapper = mount(<QuestionnaireHoc underline={2}/>);
            const grid_number = wrapper.find(Grid).length;
            expect(grid_number).toEqual(11);
        })
    })
})