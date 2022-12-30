import { useState } from "react";
import MouseSparks from "../MouseSparks";
import ToggleButton from "../ToggleButton";

export default function App() {
    const [areSparksOn, setAreSparksOn] = useState(true)

    return (
        <div>
            <MouseSparks
                areSparksOn={areSparksOn}
            />
            <ToggleButton
            isSwitchOn={areSparksOn}
                toggleState={setAreSparksOn}
            />
        </div>
    )
}