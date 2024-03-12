import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FilterReducer } from "./filterSlice"

const rootReducer = combineReducers({
    filter: FilterReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export default store