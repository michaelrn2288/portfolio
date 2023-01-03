import { useState } from "react";
import styled from "styled-components";
import { hexToHSL } from "../../Utils/colorConverter";
import ColorSelector from "../ColorSelector";
import Footer from "../Footer";
import Header from "../Header";
import MouseSparks from "../MouseSparks";
import Router from "../Router";
import ToggleButton from "../ToggleButton";

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    background-color:aquamarine;
`

const CustomColor = styled.div`
    position: fixed;
    top: 50%;
    left: 10%;
    height: 66px;
    width: 66px;
    background-color: ${ props => props.selectedColor.hslcolor };
    border: solid black 7px;
`

export default function App() {
    const [areSparksOn, setAreSparksOn] = useState(true)
    const [selectedColor, setSelectedColor] = useState({ hexcolor: '#ab0b0b', hslcolor: '' })

    const headerHeight = '10'//vh

    return (
        <div>
            <Header headerHeight={headerHeight} />
            <MouseSparks
                areSparksOn={areSparksOn}
            />
            <ToggleButton
                isSwitchOn={areSparksOn}
                toggleState={setAreSparksOn}
                textWhenOn={'desligar faíscas'}
                textWhenOff={'ligar faíscas'}
            />
            <ColorSelector
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <CustomColor
                selectedColor={selectedColor}
            ></CustomColor>
            <StyledMain>
                <Router headerHeight={headerHeight} />
            </StyledMain>
        </div>
    )
}