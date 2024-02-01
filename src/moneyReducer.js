import { createSlice } from "@reduxjs/toolkit";


const moneyReducer = createSlice({
    name: 'money',
    initialState: {
        history: JSON.parse(localStorage.getItem('history')) || [],
        current:  JSON.parse(localStorage.getItem('cash')) || 0
    },
    reducers: {
        GET_MONEY(state, action){
            state.current += action.payload.cash
            state.history.unshift(action.payload)
            localStorage.setItem('history', JSON.stringify(state.history))
            localStorage.setItem('cash', JSON.stringify(state.current))
            console.log(state.history)
        },
        WASTE_MONEY(state, action){
            state.current += action.payload.cash
            state.history.unshift(action.payload)
            localStorage.setItem('history', JSON.stringify(state.history))
            localStorage.setItem('cash', JSON.stringify(state.current))
            console.log(state.history)
        }
    }
})

export default moneyReducer.reducer
export const {GET_MONEY, WASTE_MONEY} = moneyReducer.actions