import {  combineReducers, createStore } from "@reduxjs/toolkit";
import dateReducer from "../reducers/datereducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";

const reducer = combineReducers({
    chosenDate: dateReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))

