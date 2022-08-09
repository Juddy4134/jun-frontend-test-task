import {combineReducers, configureStore} from "@reduxjs/toolkit"
import horseSlice from "./reducers/horseSlice"

const rootReducer = combineReducers({
    horseSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store