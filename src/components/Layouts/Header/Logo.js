import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeaderLogo from "../../../images/logo.png"

const Logo = props => {
    return (
        <StyledLogo>
            <img src={HeaderLogo} />
        </StyledLogo>
    )
} 

const StyledLogo = styled.div`
    & img {
        ${
        tw`w-32
        -ml-2`
        }
    }
`

export default Logo