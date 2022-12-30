import styled from "styled-components"

export default function ToggleButton(props) {

    const StyledButton = styled.button`
        position: fixed;
        top: 48vh;
        left: 2vw;
    `

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