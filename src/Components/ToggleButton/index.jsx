import styled from "styled-components"

const StyledButton = styled.button`
    position: fixed;
    top: 48vh;
    left: 2vw;
`

export default function ToggleButton(props) {
    function handleClick() {
        props.toggleState(prevState => !prevState)
    }

    return (
        <StyledButton onClick={handleClick} >
            {props.isSwitchOn ?
                props.textWhenOn
                : props.textWhenOff
            }
        </StyledButton>
    )
}