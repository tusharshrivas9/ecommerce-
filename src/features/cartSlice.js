import { createSlice } from "@reduxjs/toolkit";
import Product from "../components/Product";

const initialState = {
    cart:[],
    items:Product,
    totalQuantity:0,
    totalprice:0,
};

export const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            state.cart.push(action.payload)
        }
    },
})

export const {addtocart} = cartSlice.actions
export default cartSlice.reducer