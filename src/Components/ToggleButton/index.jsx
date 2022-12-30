export default function ToggleButton(props) {

    function handleClick() {
        props.toggleState(prevState => !prevState)
    }

    return (
        <button onClick={handleClick} >
            {props.isSwitchOn ?
                props.textWhenOn
                : props.textWhenOff
            }
        </button>
    )
}