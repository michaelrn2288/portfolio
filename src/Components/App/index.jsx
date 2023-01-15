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
import Router from "../Router";
import ToggleButton from "../ToggleButton";

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    color: hsla(
        var(--hue-secondary1),
        var(--saturation-100),
        var(--light-inverted-050),
        1);
    background-color: hsla(
        var(--hue-primary),
        var(--saturation-100),
        var(--light-150),
        1);
`

export default function App() {
    const [areSparksOn, setAreSparksOn] = useState(true)
    const [selectedColor, setSelectedColor] = useState({
        hexcolor: '#0012ff',
        hslcolor: hexToHSL('#0012ff')
    })

    setCssVars(selectedColor.hslcolor)

    const headerHeight = '13'//vh

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
            <StyledMain >
                <Router headerHeight={headerHeight} />
            </StyledMain>
        </div>
    )
}