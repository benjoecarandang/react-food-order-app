import React, { Fragment } from "react";
import tw, { styled } from "twin.macro";

import DUMMY_DATA from "../../../dummy_data";

const mealsElement = DUMMY_DATA.map((meal) => {
  return (
    <div
      key={meal.id}
      className="max-w-sm relative bg-white flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="rounded-t-lg" src={meal.imageSrc} alt="" />

        {meal.tags && (
          <Fragment>
            <div className="absolute bg-theme-green text-xs font-medium py-1 px-3 text-white top-5 -left-1">
              {meal.tags}
            </div>
            <div className="absolute text-xs border-l-4 border-t-4 border-l-transparent border-theme-green font-medium p-1 text-white top-11 -left-1 -z-10"></div>
          </Fragment>
        )}
      </a>
      <div className="flex flex-col h-full p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">
            {meal.name}
          </h5>
        </a>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
          {meal.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-medium text-2xl">{meal.price}</span>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

const MealsList = (props) => {
  return (
    <StyledGrid>
      {mealsElement}
    </StyledGrid>

  );
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
