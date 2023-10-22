import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './Features/dataSlice'
import { logger } from './Features/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})