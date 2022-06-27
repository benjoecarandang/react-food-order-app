import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import Modal from "../../UI/Modal";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState(props.items)

  const cartItemsElement = cartItems.map((item) => <li key={item.id}>{item.name} {item.id}</li>);

  return <Modal isShown={props.isShown} onClose={props.onCloseCart}>{cartItemsElement}</Modal>;
};

export default Cart;
