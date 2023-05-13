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
`

export default function PageWrapper(props) {

    return(
        <StyledDiv>{props.children}</StyledDiv>
    )
}