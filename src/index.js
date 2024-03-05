import { applyMiddleware, combineReducers, createStore } from "redux";
import countryReducer from "./slices/countrySlice/countrySlices";
import  {thunk}  from "redux-thunk";


const root=combineReducers({
    country:countryReducer
})
const store=createStore(root,applyMiddleware(thunk))
export default store;