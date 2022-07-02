import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import tw, { styled } from "twin.macro";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsButtonHighlighted(true);

    setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
  }, [items]);

  return (
    <div className="flex items-center" onClick={props.onCartOpen}>
      <StyleButton isButtonHighlighted={isButtonHighlighted}>
        My Cart
        <span className="text-xs rounded-full bg-theme-orange px-2 py-1 w-32 relative left-2 bg-orange">
          {numberOfCartItems}
        </span>
      </StyleButton>
    </div>
  );
};

const StyleButton = styled.button(({ isButtonHighlighted }) => [
  tw`text-white bg-gradient-to-br from-pink-500 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm pl-6 pr-7 py-2.5 text-center`,
  isButtonHighlighted &&
    `
      animation: bump 300ms ease-out;

      @keyframes bump {
        0% {
          transform: scale(1);
        }
        10% {
          transform: scale(0.9);
        }
        30% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(1.15);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
]);

export default CartButton;
