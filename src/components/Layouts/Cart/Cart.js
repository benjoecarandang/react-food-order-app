import React, { Fragment, useContext } from "react";
import tw, { styled } from "twin.macro";
import Modal from "../../UI/Modal";
import CartSummary from "./CartSummary";
import CartForm from "./CartForm";

const Cart = (props) => {
  return (
    <Modal title="My Cart" onCartHide={props.onCartHide}>
      <StyledCheckoutWrapper>
        <CartForm></CartForm>
        <CartSummary></CartSummary>
      </StyledCheckoutWrapper>
    </Modal>
  );
};

const StyledCheckoutWrapper = styled.div`
  & > div {
    flex: 1 1 auto;
  }

  & > div:first-child {
    flex-basis: 30%;
  }

  ${tw`relative flex justify-between p-5 bg-gray-100 bg-opacity-50`}
`;

export default Cart;
