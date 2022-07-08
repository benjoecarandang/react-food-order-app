import tw, { styled } from "twin.macro";

const Card = (props) => {
  const image = props.imageSrc && (
    <a href="">
      <img className="rounded-t-lg" src={props.imageSrc} alt="" />

      {props.tags && (
        <div>
          <StyledTag text={props.tags}>{props.tags}</StyledTag>
          <StyledRibbonTail text={props.tags} className="-z-10"></StyledRibbonTail>
        </div>
      )}
    </a>
  );

  const title = props.title && (
    <a href="#">
      <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
    </a>
  );

  const description = props.description && (
    <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
      {props.description}
    </p>
  );

  const details = (props.title || props.description) && (
    <div className="flex flex-col h-full p-5">
      {title}
      {description}
    </div>
  );

  return (
    <StyledCard className={props.className}>
      {image}
      {details}
      {props.children}
    </StyledCard>
  );
};

const StyledCard = styled.div(
  tw`max-w-sm relative flex flex-col rounded-xl border shadow-sm bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700`
);

const StyledTag = styled.div(({ text }) => [
  tw`absolute bg-theme-green text-xs font-medium py-1 px-3 text-white top-4 -left-1 rounded-t-md rounded-br-md`,
  text === "Featured" ? tw`bg-theme-green` : tw`bg-theme-orange`,
]);

const StyledRibbonTail = styled.div(({ text }) => [
  tw`absolute text-xs border-l-4 border-t-4 !border-l-transparent font-medium p-1 text-white top-10 -left-1`,
  text === "Featured" ? tw`border-theme-green` : tw`border-theme-orange`,
]);

export default Card;
