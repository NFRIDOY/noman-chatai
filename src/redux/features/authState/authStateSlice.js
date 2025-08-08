import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const authStateSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        settoken: (state, action) => {
            state.value = action.payload;
        },
        removetoken: (state) => {
            state.value = ''
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { settoken, removetoken } = authStateSlice.actions

export default authStateSlice.reducer