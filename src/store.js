import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneyReducer";

const reducers = combineReducers({
    money: moneyReducer
})

export const store = configureStore({
    reducer: reducers
})