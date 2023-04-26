import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    hexToHSL,
    hslcolorAdjusts,
    blackOrWhiteContrast,
    hslColorHue,
    hslColorSaturation,
    hslColorLightness
} from "../../Utils/colorTools";
import setCssVars from "../../Utils/setCssVars";
import ColorSelector from "../ColorSelector";
import Footer from "../Footer";
import Header from "../Header";
import MouseSparks from "../MouseSparks";
import PageWrapper from "../PageWrapper";
import Router from "../Router";
import ToggleButton from "../ToggleButton";


const headerHeight = '13'//vh

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    padding-top: ${headerHeight}vh;
`

const initialColor = '#000233'

export default function App() {
    const [areSparksOn, setAreSparksOn] = useState(true)
    const [selectedColor, setSelectedColor] = useState({
        hexcolor: initialColor,
        hslcolor: hexToHSL(initialColor)
    })

    setCssVars(selectedColor.hslcolor)

    return (
        <PageWrapper>
            <Header headerHeight={headerHeight} />
            {areSparksOn && <MouseSparks />}
            <ToggleButton
                isSwitchOn={areSparksOn}
                toggleState={setAreSparksOn}
                textWhenOn={'desligar faíscas'}
                textWhenOff={'ligar faíscas'}
                selectedColor={selectedColor}
            />
            <ColorSelector
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <StyledMain >
                <Router headerHeight={headerHeight} />
            </StyledMain>
            <Footer />
        </PageWrapper>
    )
}