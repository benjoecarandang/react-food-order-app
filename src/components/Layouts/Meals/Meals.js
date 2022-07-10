import React from "react";
import Section from "../../UI/Section";
import Container from "../../UI/Container";
import MealsList from "./MealsList";

const Meals = (props) => {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-light mb-5 leading-15">
          Hatid App Promo in <span className="font-medium">Manila</span>
        </h1>
        <MealsList />
      </Container>
    </Section>
  );
};

export default Meals;