import tw, { styled } from "twin.macro";

const Section = (props) => {
  return (
    <StyledSection
      className={props.className}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </StyledSection>
  );
};

const StyledSection = styled.section(({ customClasses }) => [
	tw`py-20`
]);

export default Section;
