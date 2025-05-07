import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Item{
    title:string,
    price:number,
    count:number
}
interface KorzinaState{
    items:Item[];
}
const initialState:KorzinaState = {
    items:[]
}
export const korzinaStore = createSlice({
    name:"korzina",
    initialState,
    reducers:{
        addItems:(state,action:PayloadAction<Item>) =>{
            state.items.push(action.payload);
        }
        //remove
        //clear
    }
})
export const {addItems} = korzinaStore.actions;
export default korzinaStore.reducer