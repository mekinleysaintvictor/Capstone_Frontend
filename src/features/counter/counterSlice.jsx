import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 5,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        //increment
        incremented(state) {
            state.value++;
        },

        decremented(state) {
            state.value--;
        },

        amountAdded(state, action) {
            state.value += actionpayload;
        },
    },
});

export const { incremented, decremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;