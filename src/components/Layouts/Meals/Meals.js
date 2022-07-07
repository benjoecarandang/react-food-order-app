import React, { Fragment } from "react";
import tw, { styled } from "twin.macro";
import Container from "../../UI/Container";
import MealsList from "./MealsList";

const Meals = (props) => {
  return (
    <section className="food-list py-10">
      <Container>
        <h1 className="text-3xl font-light mb-5 leading-15">
          Hatid App Promo in <span className="font-medium">Manila</span>
        </h1>

        <MealsList />
      </Container>
    </section>
  );
};

export default Meals;