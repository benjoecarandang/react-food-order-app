import { Fragment, useContext } from "react";
import CartContext from "../../../store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    
    const onSubmitHandler = (event) => {
        event.preventDefault();

        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price,
            imageSrc: props.imageSrc
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
        <div
          key={props.id}
          className="max-w-sm relative bg-white flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img className="rounded-t-lg" src={props.imageSrc} alt="" />

            {props.tags && (
              <Fragment>
                <div className="absolute bg-theme-green text-xs font-medium py-1 px-3 text-white top-5 -left-1">
                  {props.tags}
                </div>
                <div className="absolute text-xs border-l-4 border-t-4 border-l-transparent border-theme-green font-medium p-1 text-white top-11 -left-1 -z-10"></div>
              </Fragment>
            )}
          </a>
          <div className="flex flex-col h-full p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">
                {props.name}
              </h5>
            </a>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              {props.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <span className="font-medium text-2xl">${props.price}</span>
              </div>
              <div>
                <button
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}

export default MealItem;