import tw, { styled } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  return (
    <StyledListItem>
      <StyledListItemChild className="max-w-[150px]">
        <img className="rounded-lg" src={props.imageSrc} alt="" />
      </StyledListItemChild>

      <StyledListItemChild2>
        <p className="font-medium text-gray-800">{props.name}</p>
        <p className="font-light">{`Quantity: x${props.amount}`}</p>
        <p className="mt-auto font-medium">{`PHP ${props.price}`}</p>
      </StyledListItemChild2>

      <StyledListItemChild>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-400"
        ></FontAwesomeIcon>

        <div className="flex gap-2">
          <ButtonStyled onClick={props.onCartItemRemove}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </ButtonStyled>

          <ButtonStyled onClick={props.onCartItemAdd}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </ButtonStyled>
        </div>
      </StyledListItemChild>
    </StyledListItem>
  );
};

const StyledListItem = styled.li(
  tw`flex justify-between gap-5 p-5 border-b-2 border-gray-200`
);

const StyledListItemChild = styled.div(
  tw`flex flex-col items-end justify-between flex-1
  `
);

const StyledListItemChild2 = styled.div`
  flex: 2 1 0%;

  ${tw`flex flex-col`}
`;

const ButtonStyled = styled.button(
  tw`border-2 border-gray-300 w-10 px-2 py-1.5 rounded-md text-gray-600`
);

export default CartItem;
