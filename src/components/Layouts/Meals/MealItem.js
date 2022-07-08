import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import tw, { styled } from "twin.macro";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
      imageSrc: props.imageSrc,
    });
  };

  return (
    <form key={props.id} onSubmit={onSubmitHandler}>
      <Card
        className="h-full"
        imageSrc={props.imageSrc}
        tags={props.tags}
        title={props.name}
        description={props.description}
      >
        <div className="flex items-center justify-between mt-auto px-5 pb-5">
          <div>
            <span className="font-medium text-2xl">${props.price}</span>
          </div>

          <div>
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default MealItem;
