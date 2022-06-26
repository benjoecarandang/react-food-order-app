import React from "react";
import tw, { styled } from "twin.macro";

const Nav = (props) => {
  return (
    <StyledNav>
        <StyledUnorderLists>
            <StyledListItem>Home</StyledListItem>
            <StyledListItem>Categories</StyledListItem>
            <StyledListItem>Contact Us</StyledListItem>
            <StyledListItem>About Us</StyledListItem>
        </StyledUnorderLists>
    </StyledNav>
  );
};

const StyledNav = styled.header(
  tw`
    ml-auto
    mr-10
    my-auto
  `
)

const StyledUnorderLists = styled.ul(
  tw`
    flex
    items-center
  `
)


const StyledListItem = styled.li(
  tw`
    text-base
    font-medium
    text-gray-500
    hover:text-gray-800
    mx-4 cursor-pointer
  `
)

export default Nav;
