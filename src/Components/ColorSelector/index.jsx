import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { hexToHSL } from "../../Utils/colorTools"

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
        console.log(arrowPosition)
    }

    function handleChange(event) {
        const { name, value } = event.target
        props.setSelectedColor(prevColor => ({
            [name]: value,
            hslcolor: hexToHSL(value)
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
                    name='hexcolor'
                    value={props.selectedColor.hexcolor}
                    onChange={handleChange}
                />
            </SecondaryContainer>
            <SlideController
                onClick={toggleRevealComponent}
                arrowPosition={arrowPosition}
            >
            ❬❬
            </SlideController>
        </MainContainer>
    )
}