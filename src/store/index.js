import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice.js";
import mealSlice from "./meal-slice";

const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        meals: mealSlice.reducer
    }
})

export default store;