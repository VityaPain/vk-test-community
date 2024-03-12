import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

import { ColorFilterType } from "../../types/GroupTypes"

type InitialState = {
    filterOption: {
        friend: boolean,
        private: boolean | 'all',
        color: ColorFilterType
    }
}

const initialState: InitialState = {
    filterOption: {
        friend: false,
        private: 'all',
        color: ''
    }
}

export const slice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFriendFilter: (state, { payload } : { payload: boolean }) => {
            state.filterOption = {...state.filterOption, friend: payload}
        },
        setPrivacyFilter: (state, { payload } : { payload: boolean | 'all' }) => {
            state.filterOption = {...state.filterOption, private: payload}
        },
        setColorFilter: (state, { payload } : { payload: ColorFilterType }) => {
            state.filterOption = {...state.filterOption, color: payload}
        }
    }
})

export const { 
    setFriendFilter, 
    setPrivacyFilter,
    setColorFilter
} = slice.actions

export const selectFilterOption = (state: RootState) => state.filter.filterOption

export const FilterReducer = slice.reducer
