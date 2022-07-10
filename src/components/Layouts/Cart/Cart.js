import React, { Fragment, useContext } from "react";
import tw, { styled } from "twin.macro";
import Modal from "../../UI/Modal";
import CartSummary from "./CartSummary";
import CartForm from "./CartForm";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <Modal title="My Cart" actionHandler={cartToggleHandler}>
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
