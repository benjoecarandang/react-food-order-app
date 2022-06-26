import React from "react"
import tw, { styled } from "twin.macro"

const Container = props => {
    return (
        <StyledContainer dark={false} className={props.className}>{props.children}</StyledContainer>
    )
}

const StyledContainer = styled.div(
    tw`
    container
    flex
    mx-auto`
)

export default Container