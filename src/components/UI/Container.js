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
    px-5
    mx-auto`
)

export default Container