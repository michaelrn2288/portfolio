import { useState } from "react"
import styled, { keyframes } from "styled-components"

const hiddenButtonSpot = '-220px'

const slideInButton = keyframes`
    from {
        transform: translateX(${hiddenButtonSpot})
    }
    to {
        transform: translateX(0);
    }
`

const slideOutButton = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(${hiddenButtonSpot});
    }
`

const MainComponent = styled.div`
    display: flex;
    position: fixed;
    gap: 20px;
    top: 380px;
    left: 30px;
    transform: ${hiddenButtonSpot};
    animation: ${props => (
        props.isComponentRevealed ? slideInButton : slideOutButton)} 0.4s linear forwards;
`

const StyledButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    width: 11rem;
    color: black;
    background-color: hsla(var(--hue-contrast), 100%, 50%, 0.65);
    transition: 0.4s;

    &:hover{
        background-color: hsla(var(--hue-contrast), 100%, 50%, 1);
    }

    &:active{
        background-color: hsla(var(--hue-contrast), 100%, 75%, 1);
    }
`

const SlideController = styled.div`
    font-size: 3rem;
    cursor: pointer;
    letter-spacing: -0.4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transform: scaleX(1.5) rotateY(${props => props.arrowPosition});
`

export default function ToggleButton(props) {

    const [wasComponentRevealed, setWasComponentRevealed] = useState(false)
    const [isComponentRevealed, setIsComponentRevealed] = useState(false)
    const [arrowPosition, setArrowPosition] = useState('180deg')

    function toggleRevealComponent() {
        setIsComponentRevealed(prevState => !prevState)
        setArrowPosition(prevState => {
            return prevState === '0' ? '180deg' : '0'
        })
        console.log(arrowPosition)
    }

    function handleClick() {
        props.toggleState(prevState => !prevState)
    }

    return (
        <MainComponent
        wasComponentRevealed={wasComponentRevealed}
        isComponentRevealed={isComponentRevealed}
        >
            <StyledButton onClick={handleClick} >
                {props.isSwitchOn ?
                    props.textWhenOn
                    : props.textWhenOff
                }
            </StyledButton>
            <SlideController
                onClick={toggleRevealComponent}
                arrowPosition={arrowPosition}
            >
            ❬❬
            </SlideController>
        </MainComponent>
    )
}