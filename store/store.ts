import { configureStore } from "@reduxjs/toolkit"
import korzinaReducer from "./korzinaStore"
import { modalReducer } from "./korzinaStore"
export const makeStore = () =>{
    return configureStore({
        reducer:{
            korzina:korzinaReducer,
            modal:modalReducer
        },
    })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']