import { Fragment } from "react";
import tw, { styled } from "twin.macro";

const Input = (props) => {
  return (
    <Fragment>
      <label
        className="block tracking-wide text-sm font-medium mb-2 leading-3"
        htmlFor={props.options.id}
      >
        {props.options.label}
      </label>
      <StyledInput {...props.options} />

      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </Fragment>
  );
};

const StyledInput = styled.input(
  tw` appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`

	// border-red-500
);
export default Input;
