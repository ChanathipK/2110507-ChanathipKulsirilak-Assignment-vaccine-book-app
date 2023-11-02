import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
    bookingState: BookingItem[],
}

const initialState: BookingState = {
    bookingState: [],
};


export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            if (state.bookingState.length > 0) {
                let newBooking: BookingItem = action.payload;
                state.bookingState[0] = newBooking;
            } else {
                state.bookingState.push(action.payload);
            }
        },
        cancelBooking: (state, action: PayloadAction<BookingItem>) => {
            if (state.bookingState.length === 1) {
                state.bookingState = [];
            }
        }
    }
});

export const { addBooking, cancelBooking } = bookSlice.actions;
export default bookSlice.reducer;