import React, {Fragment} from "react"
import Logo from '../../images/logo.png'
import tw from 'twin.macro'

const onCartClick = () => {
    console.log('im clicked');
}

const Header = props => {
    return (
        <Fragment>
            <StyledHeader>
                <div className="container flex mx-auto">
                    <div className="">
                        <img src={Logo} className="w-32 -ml-2"/>
                    </div>
                    <nav className="ml-auto mr-10 my-auto">
                        <ul className="flex items-center">
                            <StyledListItem>Home</StyledListItem>
                            <StyledListItem>Categories</StyledListItem>
                            <StyledListItem>Contact Us</StyledListItem>
                            <StyledListItem>About Us</StyledListItem>
                        </ul>
                    </nav>
                    <div className="flex items-center">
                        <StyleButton>
                            My Cart <span className="text-xs rounded-full bg-theme-orange px-2 py-1 w-32 relative left-2 bg-orange">0</span>
                        </StyleButton>
                    </div>
                </div>
            </StyledHeader>
        </Fragment>
    )
}

const StyledHeader = tw.header`
    relative
    bg-white
    py-6
    h-24
`

const StyledListItem = tw.li`
    text-base
    font-medium
    text-gray-500
    hover:text-gray-800
    mx-4 cursor-pointer
` 

const StyleButton = tw.button`
    text-white
    bg-gradient-to-br
    from-pink-500
    to-yellow-500
    hover:bg-gradient-to-bl
    focus:ring-4
    focus:outline-none
    focus:ring-pink-200
    dark:focus:ring-pink-800
    font-medium rounded-full
    text-sm pl-6
    pr-7
    py-2.5
    text-center
`

export default Header;