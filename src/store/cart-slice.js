import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    replaceCartItem(state, action) {
      state.items = action.payload.items;
      state.totalAmount = state.totalAmount + action.payload.quantity;
    },
    addItem(state, action) {
      const updatedTotalAmount = state.totalAmount + action.payload.item.price * action.payload.item.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.item);
      }

      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    decrement(state, action) {
      const { payload } = action;

			const existingCartItem = state.items.find(item => item.id === payload.id);

			if(existingCartItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== payload.id)
			} else {
				existingCartItem.totalAmount = existingCartItem.totalAmount - existingCartItem.price;
			}

			existingCartItem.quantity--;
    },
		removeFromCart(state, action) {
			
			const { payload } = action;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

			state.items = state.items.filter(item => item.id !== payload.id);
			state.totalAmount = state.totalAmount - existingCartItem.quantity * existingCartItem.price;
		}
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
