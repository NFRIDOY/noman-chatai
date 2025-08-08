import { configureStore } from '@reduxjs/toolkit'
import authStateSlice from './features/authState/authStateSlice'

export const store = configureStore({
    reducer: {
        authStateSlice
    },
})