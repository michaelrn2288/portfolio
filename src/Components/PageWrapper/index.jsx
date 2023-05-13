import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
    color: hsla(
        var(--hue-secondary1),
        var(--saturation-default),
        var(--light-inverted-m30),
        1);
    background-color: hsla(
        var(--hue-primary),
        var(--saturation-default),
        var(--light-default),
        1);

        @media (max-width: 480px) {
            font-size: 0.8rem;
        }
`

export default function PageWrapper(props) {

    return(
        <StyledDiv>{props.children}</StyledDiv>
    )
}