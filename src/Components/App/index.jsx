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

    const cssRoot = document.documentElement
    cssRoot.style.setProperty('--hue-primary', hslColorHue(selectedColor.hslcolor))
    cssRoot.style.setProperty('--hue-secondary1', hslColorHue(selectedColor.hslcolor) + 30)
    cssRoot.style.setProperty('--hue-secondary2', hslColorHue(selectedColor.hslcolor) - 30)
    cssRoot.style.setProperty('--hue-contrast', hslColorHue(selectedColor.hslcolor) + 180)
    cssRoot.style.setProperty('--saturation-025', `${hslColorSaturation(selectedColor.hslcolor) * .25}%`)
    cssRoot.style.setProperty('--saturation-050', `${hslColorSaturation(selectedColor.hslcolor) * .5}%`)
    cssRoot.style.setProperty('--saturation-075', `${hslColorSaturation(selectedColor.hslcolor) * .75}%`)
    cssRoot.style.setProperty('--saturation-100', `${hslColorSaturation(selectedColor.hslcolor)}%`)
    cssRoot.style.setProperty('--saturation-125', `${hslColorSaturation(selectedColor.hslcolor) * 1.25}%`)
    cssRoot.style.setProperty('--saturation-150', `${hslColorSaturation(selectedColor.hslcolor) * 1.5}%`)
    cssRoot.style.setProperty('--saturation-175', `${hslColorSaturation(selectedColor.hslcolor) * 1.75}%`)
    cssRoot.style.setProperty('--light-025', `${hslColorLightness(selectedColor.hslcolor) * .25}%`)
    cssRoot.style.setProperty('--light-050', `${hslColorLightness(selectedColor.hslcolor) * .5}%`)
    cssRoot.style.setProperty('--light-075', `${hslColorLightness(selectedColor.hslcolor) * .75}%`)
    cssRoot.style.setProperty('--light-100', `${hslColorLightness(selectedColor.hslcolor)}%`)
    cssRoot.style.setProperty('--light-125', `${hslColorLightness(selectedColor.hslcolor) * 1.25}%`)
    cssRoot.style.setProperty('--light-150', `${hslColorLightness(selectedColor.hslcolor) * 1.5}%`)
    cssRoot.style.setProperty('--light-175', `${hslColorLightness(selectedColor.hslcolor) * 1.75}%`)
    cssRoot.style.setProperty('--light-inverted-025', `${(100 - hslColorLightness(selectedColor.hslcolor)) * .25}%`)
    cssRoot.style.setProperty('--light-inverted-050', `${(100 - hslColorLightness(selectedColor.hslcolor)) * .5}%`)
    cssRoot.style.setProperty('--light-inverted-075', `${(100 - hslColorLightness(selectedColor.hslcolor)) * .75}%`)
    cssRoot.style.setProperty('--light-inverted-100', `${(100 - hslColorLightness(selectedColor.hslcolor))}%`)
    cssRoot.style.setProperty('--light-inverted-125', `${(100 - hslColorLightness(selectedColor.hslcolor)) * 1.25}%`)
    cssRoot.style.setProperty('--light-inverted-150', `${(100 - hslColorLightness(selectedColor.hslcolor)) * 1.5}%`)
    cssRoot.style.setProperty('--light-inverted-175', `${(100 - hslColorLightness(selectedColor.hslcolor)) * 1.75}%`)

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