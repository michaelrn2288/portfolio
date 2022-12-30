import { useState } from "react"

export default function ToggleButton(props) {

    function handleClick() {
        props.toggleState(prevState => !prevState)
    }

    return (
        <button onClick={handleClick} >
            {props.isSwitchOn ?
                'desligar faíscas'
                : 'ligar faíscas'
            }
        </button>
    )
}