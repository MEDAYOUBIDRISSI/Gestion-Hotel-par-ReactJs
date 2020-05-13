import { combineReducers } from "redux";
import ChambreReducer from "./ChambreReducer";

// for root reducer
export default combineReducers({
    chambres : ChambreReducer
})