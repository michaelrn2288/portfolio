import { useState } from "react";
import styled from "styled-components";
import { hexToHSL, hslColorAdjust } from "../../Utils/colorTools";
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
    background-color: var(--color-inverted-light-3);
    border: solid black 7px;
`

export default function App() {
    const [areSparksOn, setAreSparksOn] = useState(true)
    const [selectedColor, setSelectedColor] = useState({
        hexcolor: '#0012ff',
        hslcolor: hexToHSL('#0012ff')
    })

    const cssRoot = document.documentElement
    cssRoot.style.setProperty( '--color-main', selectedColor.hslcolor )
    cssRoot.style.setProperty( '--color-main-light-1', hslColorAdjust(selectedColor.hslcolor, 0, 1, 1.25) )
    cssRoot.style.setProperty( '--color-main-light-2', hslColorAdjust(selectedColor.hslcolor, 0, 1, 1.5) )
    cssRoot.style.setProperty( '--color-main-light-3', hslColorAdjust(selectedColor.hslcolor, 0, 1, 1.75) )
    cssRoot.style.setProperty( '--color-main-dark-1', hslColorAdjust(selectedColor.hslcolor, 0, 1, 0.75) )
    cssRoot.style.setProperty( '--color-main-dark-2', hslColorAdjust(selectedColor.hslcolor, 0, 1, 0.5) )
    cssRoot.style.setProperty( '--color-main-dark-3', hslColorAdjust(selectedColor.hslcolor, 0, 1, 0.25) )
    cssRoot.style.setProperty( '--color-inverted', hslColorAdjust(selectedColor.hslcolor,180,  1, 1) )
    cssRoot.style.setProperty( '--color-inverted-light-1', hslColorAdjust(selectedColor.hslcolor, 180, 1, 1.25) )
    cssRoot.style.setProperty( '--color-inverted-light-2', hslColorAdjust(selectedColor.hslcolor, 180, 1, 1.5) )
    cssRoot.style.setProperty( '--color-inverted-light-3', hslColorAdjust(selectedColor.hslcolor, 180, 1, 1.75) )
    cssRoot.style.setProperty( '--color-inverted-dark-1', hslColorAdjust(selectedColor.hslcolor, 180, 1, 0.75) )
    cssRoot.style.setProperty( '--color-inverted-dark-2', hslColorAdjust(selectedColor.hslcolor, 180, 1, 0.5) )
    cssRoot.style.setProperty( '--color-inverted-dark-3', hslColorAdjust(selectedColor.hslcolor, 180, 1, 0.25) )

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
            <CustomColor></CustomColor>
            <StyledMain>
                <Router headerHeight={headerHeight} />
            </StyledMain>
        </div>
    )
}