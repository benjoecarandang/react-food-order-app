import React from "react";
import tw, { styled } from "twin.macro";
import MealItem from "./MealItem";

import DUMMY_DATA from "../../../dummy_data";

const MealsList = (props) => {
  const mealsElement = DUMMY_DATA.map((meal) => {
    const price = meal.price.toFixed(2);

    return (
      <MealItem
        id={meal.id}
        name={meal.name}
        price={price}
        amount={meal.amount}
        tag={meal.tags}
        description={meal.description}
        imageSrc={meal.imageSrc}
      />
    );
  });

  return <StyledGrid>{mealsElement}</StyledGrid>;
};

const StyledGrid = styled.div(
  tw`
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    auto-rows-auto
    gap-10
    justify-center
    `
);

export default MealsList;
