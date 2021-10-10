import 'jsdom-global/register';
import React from "react";
import {ReactWrapper, shallow, mount, ShallowWrapper} from "enzyme";
import Navigation from "../components/Navigation/Navigation";
import {AppBar, Grid} from "@mui/material";
import Index from "../pages/index";
import QuestionnaireHoc from "../components/hoc/QuestionnaireHOC";
import {Provider} from "react-redux";
import {makeStore} from "../redux/store";
jest.useFakeTimers()

describe("Pages", ()=>{
    describe("Index page", ()=>{
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