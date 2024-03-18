import { createSlice, current } from "@reduxjs/toolkit"
import produce from "immer"


const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {


        addToCart: (state = initialState, action) => {
            return produce(state, draft => {
                console.log(current(state));
                const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

                if (IteamIndex >= 0) {

                    state.carts[IteamIndex].qnty += 1
                    console.log(state.carts[IteamIndex])

                } else {
                    const temp = { ...action.payload, qnty: 1 }
                    // state.carts = [...state.carts, temp]
                    state.carts.push({ ...action.payload, qnty: 1 })
                    console.log(temp);
                }
            })

        },
        removeToCart: (state, action) => {
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            state.carts = data
        },

    }
});


export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
