import React, { Fragment, useContext } from "react";
import tw, { styled } from "twin.macro";
import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem";

const CartSummary = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const totalAmount = `PHP ${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        const lineTotalAmount = item.price * item.amount;
        return (
          <CartItem
            name={item.name}
            amount={item.amount}
            price={lineTotalAmount}
            imageSrc={item.imageSrc}
            onCartItemAdd={cartItemAddHandler.bind(null, item)}
            onCartItemRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}

      <li>
        <StyledTotalAmount>
          {cartCtx.items.length > 0 ? (
            <Fragment>
              <div className="text-xl font-semibold">Total</div>
              <div className="text-lg font-bold">{totalAmount}</div>
            </Fragment>
          ) : (
            <div className="text-xl font-semibold">No items in the cart!</div>
          )}
        </StyledTotalAmount>
      </li>
    </ul>
  );

  return (
    <div>
      <div class="text-xl font-semibold mb-5">Order Summary</div>

      <StyledOrderSummaryWrapper>{cartItems}</StyledOrderSummaryWrapper>
    </div>
  );
};

const StyledTotalAmount = styled.div(tw`p-5 flex justify-between`);

const StyledOrderSummaryWrapper = styled.div(
  tw`border-2 border-gray-200 bg-white rounded-lg`
);

export default CartSummary;
