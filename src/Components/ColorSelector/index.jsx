import styled from "styled-components"
import { hexToHSL } from "../../Utils/colorTools"

const ColorInput = styled.input`
    position: fixed;
`

export default function ColorSelector(props) {

    function handleChange(event) {
        const { name, value } = event.target
        props.setSelectedColor(prevColor => ({
            [name]: value,
            hslcolor: hexToHSL(value)
        }))
    }

    return (
        <>
            <ColorInput
                type='color'
                name='hexcolor'
                value={props.selectedColor.hexcolor}
                onChange={handleChange}
            />
        </>
    )
}