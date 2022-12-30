import { useState } from "react";
import styled from "styled-components";
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

export default function App() {
    const [areSparksOn, setAreSparksOn] = useState(true)

    return (
        <div>
            <Header />
            <MouseSparks
                areSparksOn={areSparksOn}
            />
            <ToggleButton
                isSwitchOn={areSparksOn}
                toggleState={setAreSparksOn}
                textWhenOn={'desligar faíscas'}
                textWhenOff={'ligar faíscas'}
            />
            <StyledMain>
                <Router />
            </StyledMain>
        </div>
    )
}