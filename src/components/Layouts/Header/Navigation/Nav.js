import React from "react";
import tw, { styled } from "twin.macro";
import { NavLink } from "react-router-dom"

const Nav = (props) => {
  return (
    <StyledNav>
      <StyledUnorderLists>
        <StyledListItem>
          <NavLink to="/">Home</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/login">Login</NavLink>
        </StyledListItem>
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
);

const StyledUnorderLists = styled.ul(
  tw`
    flex
    items-center
  `
);

const StyledListItem = styled.li(
  tw`
    text-base
    font-medium
    text-gray-500
    hover:text-gray-800
    mx-4 cursor-pointer
  `
);

export default Nav;
