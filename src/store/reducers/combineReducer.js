import { combineReducers } from "redux";
import Reducer from "./ReducerForm";

const reducer=combineReducers({form:Reducer})
export default reducer