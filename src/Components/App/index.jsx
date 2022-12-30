import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import MouseSparks from "../MouseSparks";
import Router from "../Router";
import ToggleButton from "../ToggleButton";

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
            <main>
                <Router />
            </main>
        </div>
    )
}