import styled from "styled-components"

const StyledButton = styled.button`
    position: fixed;
    top: 48vh;
    left: 2vw;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    width: 11rem;
    color: var(--black-white-contrast-on-light-1);
    background-color: var(--color-inverted-light-2);
    transition: 0.4s;

    &:hover{
        background-color: var(--color-inverted);
    }

    &:active{
        background-color: var(--color-inverted-dark-1);
    }
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