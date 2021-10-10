import {createStore, applyMiddleware, compose, Store} from "redux";
import thunk from "redux-thunk";
import {reducer, RootState} from "./reducers";
import {Context, createWrapper} from "next-redux-wrapper";

let composeEnhancers = compose;

if(typeof window !== "undefined")
    composeEnhancers = (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose || compose;

const makeStore = (context: Context) => createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk)));
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: false});