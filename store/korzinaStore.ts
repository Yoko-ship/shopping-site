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
            const testing = state.items.find((item) => item.title === action.payload.title)
            if(testing){
                state.items.map((item) => item.count += 1)
                
            }
            else{
                state.items.push(action.payload);
            }
        },
        clearItems:(state,action) =>{
            const someting = state.items.filter((item) => item.title !== action.payload)    
            state.items = someting
        },
        takeItems:(state,action) =>{
            state.items = action.payload
        }
    }
})

const modalInitial = {
    modalIsOpen:false
}
export const modalValues = createSlice({
    name:"modal",
    initialState:modalInitial,
    reducers:{
        setModalOpen:(state) =>{
            state.modalIsOpen = true
        },
        setModalClose:(state)=>{
            state.modalIsOpen = false
        }
    }

})
export const {addItems} = korzinaStore.actions;
export const {clearItems} = korzinaStore.actions
export const {takeItems} = korzinaStore.actions
export const {setModalOpen} = modalValues.actions
export const {setModalClose} = modalValues.actions
export const modalReducer = modalValues.reducer
export default korzinaStore.reducer