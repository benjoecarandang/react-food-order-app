import React, { Fragment } from "react";
import tw, { styled } from "twin.macro";
import MealsList from "./MealsList";

const Meals = (props) => {
  return (
    <section className="food-list py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-light w-6/12 mb-5 leading-15">
          Hatid App Promo in <span className="font-medium">Manila</span>
        </h1>

        <MealsList />
      </div>
    </section>
  );
};

export default Meals;