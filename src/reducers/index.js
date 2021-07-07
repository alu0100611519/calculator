import { combineReducers } from "redux";
import calcReducer from "./CalcReducer";

const calcApp =  combineReducers({
    calcReducer,
})

export default calcApp