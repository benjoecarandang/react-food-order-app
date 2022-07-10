import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
		replaceCartItem(state, action) {
			state.items = action.payload.items;
			state.totalAmount = state.totalAmount + action.payload.quantity
		},
    addItem(state, action) {
			const updatedTotalAmount = state.totalAmount + action.payload.item.price * action.payload.item.amount;

			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.item.id
			);

			const existingCartItem = state.items[existingCartItemIndex];

			let updatedItems;

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.payload.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.payload.item);
			}

			state.items = updatedItems;
			state.totalAmount = updatedTotalAmount;
    },
    decrement(state, id) {
      console.log("remove item");
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
