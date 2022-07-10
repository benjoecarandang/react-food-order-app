import React, { useEffect, useState } from "react";
import GridContainer from "../../UI/GridContainer";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { mealActions } from "../../../store/meal-slice";

const MealsList = (props) => {
  const meals = useSelector((state) => state.meals.items);
  const dispatch = useDispatch();

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
          image_src: data[key].image_src,
        });
      }

      dispatch(mealActions.replaceMealItem({ meals: mealsArray }));
    };

    getMeals().catch((error) => {
      setHttpError(error.message);
    });

  }, [dispatch, setHttpError]);

  const mealsElement = meals.map((meal) => {
    const price = meal.price.toFixed(2);

    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={price}
        amount={meal.amount}
        tags={meal.tags}
        description={meal.description}
        imageSrc={meal.image_src}
      />
    );
  });

  if (httpError) {
    return httpError;
  }

  return <GridContainer>{mealsElement}</GridContainer>;
};

export default MealsList;
