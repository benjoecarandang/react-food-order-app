import React, { Fragment } from "react"


import Container from "../../UI/Container"
import Logo from "./Logo"
import Nav from "./Navigation/Nav"
import CartButton from "../Cart/CartButton"
import styled from "styled-components"
import tw from "twin.macro"

const Header = (props) => {
  return (
    <Fragment>
      <StyledHeader>
        <Container>
          <Logo />
          <Nav />
          <CartButton onShowCart={props.onShowCart} itemCount={props.itemCount}/>
        </Container>
      </StyledHeader>
    </Fragment>
  );
};

const StyledHeader = styled.header`
    ${
      tw`
      relative
      bg-white
      py-6
      h-24
      `
    }
`;

export default Header;


