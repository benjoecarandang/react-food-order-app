import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meals",
  initialState: {
    items: [],
  },
  reducers: {
    replaceMealItem(state, action) {
      state.items = action.payload.meals;
    },
  },
});

export const mealActions = mealSlice.actions;

export default mealSlice;
