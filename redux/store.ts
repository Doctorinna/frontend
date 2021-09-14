import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

let composeEnhancers = compose;

if(typeof window !== "undefined")
    composeEnhancers = (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));