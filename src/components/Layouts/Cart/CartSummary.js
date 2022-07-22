import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import tw, { styled } from "twin.macro";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartSummary = (props) => {
  const cart = useSelector(state => state.cart);

  const totalAmount = `PHP ${cart.totalAmount.toFixed(2)}`;

  const cartElements = (
    <ul className="h-full flex flex-col">
      {cart.items.map((item) => {
        const lineTotalAmount = (item.price * item.quantity).toFixed(2);
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={lineTotalAmount}
            imageSrc={item.imageSrc}
          />
        );
      })}

      <li className="mt-auto">
        <StyledTotalAmount>
          {cart.items.length > 0 ? (
            <Fragment>
              <div className="text-xl font-semibold mt-auto">Total</div>
              <div className="text-lg font-bold">{totalAmount}</div>
            </Fragment>
          ) : (
            <div className="text-lg font-semibold text-center w-full">
              <div>
                <FontAwesomeIcon className="text-2xl" icon={faCartShopping}></FontAwesomeIcon>
              </div>
              Your cart is empty!
            </div>
          )}
        </StyledTotalAmount>
      </li>
    </ul>
  );

  return (
    <Fragment>
      {/* <div className="text-xl font-semibold mb-5">Order Summary</div> */}
      <StyledOrderSummaryWrapper>{cartElements}</StyledOrderSummaryWrapper>
    </Fragment>
  );
};

const StyledTotalAmount = styled.div(tw`px-5 py-4 flex justify-between`);

const StyledOrderSummaryWrapper = styled.div(
  tw`border-2 border-gray-200 bg-white rounded-lg align-self[stretch]`
);

export default CartSummary;
