import { configureStore } from "@reduxjs/toolkit"
import korzinaReducer from "./korzinaStore"

export const makeStore = () =>{
    return configureStore({
        reducer:{
            korzina:korzinaReducer
        },
    })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']