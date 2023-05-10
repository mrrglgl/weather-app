import { combineReducers, legacy_createStore } from "redux";
import { weatherReducer } from "./weather-reducer";

let reducers = combineReducers({
    weather: weatherReducer, 
})

let store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store