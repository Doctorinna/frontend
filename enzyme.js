//import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//import {configure} from "enzyme";
//configure({adapter: new Adapter()});
//using old js syntax
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
require("enzyme").configure({adapter: new Adapter()});