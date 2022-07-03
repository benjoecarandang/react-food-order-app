import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import MealItem from "./MealItem";

import DUMMY_DATA from "../../../dummy_data";

const MealsList = (props) => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(
        "https://hatid-app-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      let mealsArray = [];

      for (const key in data) {
        mealsArray.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          tags: data[key].tags,
          image_src:"",
        });
      }

      setMeals(mealsArray);
    }

    getMeals().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  const mealsElement = meals.map((meal) => {
    const price = meal.price.toFixed(2);

    return (
      <MealItem
        id={meal.id}
        name={meal.name}
        price={price}
        amount={meal.amount}
        tag={meal.tags}
        description={meal.description}
        imageSrc={meal.image_src}
      />
    );
  });

  if(httpError) {
    return httpError;
  }

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
