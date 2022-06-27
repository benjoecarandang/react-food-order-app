import React from "react";
import tw from "twin.macro";

const onCartClick = () => {
  console.log("im clicked");
};

const CartButton = (props) => {
  return (
    <div className="flex items-center" onClick={props.onShowCart}>
      <StyleButton>
        My Cart
        <span className="text-xs rounded-full bg-theme-orange px-2 py-1 w-32 relative left-2 bg-orange">
          {props.itemCount}
        </span>
      </StyleButton>
    </div>
  );
};

const StyleButton = tw.button`
    text-white
    bg-gradient-to-br
    from-pink-500
    to-yellow-500
    hover:bg-gradient-to-bl
    focus:ring-4
    focus:outline-none
    focus:ring-pink-200
    dark:focus:ring-pink-800
    font-medium rounded-full
    text-sm pl-6
    pr-7
    py-2.5
    text-center
`;

export default CartButton;
