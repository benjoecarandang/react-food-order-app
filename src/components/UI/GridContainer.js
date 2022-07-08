import tw, { styled } from "twin.macro";

const GridContainer = (props) => {
  return <StyledGridContainer>{props.children}</StyledGridContainer>;
};

const StyledGridContainer = styled.div(
  tw`
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      auto-rows-auto
      gap-10
      justify-center
      w-full
      `
);

export default GridContainer;
