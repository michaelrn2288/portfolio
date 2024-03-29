import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { hexToHSL, blackOrWhiteContrast } from "../../Utils/colorTools"

const hiddenColorSelectorSpot = '-220px'

const slideInColorSelector = keyframes`
    from {
        transform: translateX(${hiddenColorSelectorSpot})
    }
    to {
        transform: translateX(0);
    }
`

const slideOutColorSelector = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(${hiddenColorSelectorSpot});
    }
`

const MainContainer = styled.div`
    display: flex;
    position: fixed;
    gap: 20px;
    top: 90px;
    left: 30px;
    transform: ${hiddenColorSelectorSpot};
    animation: ${props => (
        props.isComponentRevealed ? slideInColorSelector : slideOutColorSelector)} 0.4s linear forwards;
`

const SlideController = styled.div`
    font-size: 3rem;
    cursor: pointer;
    letter-spacing: -0.4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: ${ props => blackOrWhiteContrast(props.selectedColor.hslcolor, 35) };
    transform: scaleX(1.5) rotateY(${props => props.arrowPosition});
`

const SecondaryContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--black-white-contrast-on-light-2);
`

const P = styled.p`
font-weight: 800;
    color: hsla(
        var(--hue-secondary1),
        var(--saturation-default),
        var(--light-inverted-m30),
        1);
`

const ColorInput = styled.input`
    
`

export default function ColorSelector(props) {

    const [wasComponentRevealed, setWasComponentRevealed] = useState(false)
    const [isComponentRevealed, setIsComponentRevealed] = useState(false)
    const [arrowPosition, setArrowPosition] = useState('180deg')

    function toggleRevealComponent() {
        setIsComponentRevealed(prevState => !prevState)
        setArrowPosition(prevState => {
            return prevState === '0' ? '180deg' : '0'
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        props.setSelectedColor(prevColor => ({
            hexcolor: value,
            [name]: hexToHSL(value),
        }))
    }

    return (
        <MainContainer
            wasComponentRevealed={wasComponentRevealed}
            isComponentRevealed={isComponentRevealed}
        >
            <SecondaryContainer>
                <P>Alterar esquema de cores</P>
                <ColorInput
                    type='color'
                    name='hslcolor'
                    value={props.selectedColor.hexcolor}
                    onChange={handleChange}
                />
            </SecondaryContainer>
            <SlideController
                onClick={toggleRevealComponent}
                arrowPosition={arrowPosition}
                selectedColor={props.selectedColor}
            >
            ❬❬
            </SlideController>
        </MainContainer>
    )
}