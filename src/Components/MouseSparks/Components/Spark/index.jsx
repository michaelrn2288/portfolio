import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { randomNumber } from '../../../../Utils/random'

const SparkAnimation = keyframes`
    from{
        transform: translateY(0);
        opacity: 0.9;
    }
    to {
        transform: translateY(220px);
        opacity: 0;
    }
`

const StyledSpark = styled.div`
    position: fixed;
    z-index: 99;
    width: 13px;
    height: 13px;
    clip-path: polygon(50% 0, 64% 35%, 100% 50%, 64% 64%, 50% 100%, 35% 64%, 0 50%, 35% 35%);
    background-image: radial-gradient(circle,
        rgba(255,255,255,1) 0%,
        rgba(255,255,122, 1) 45%,
        rgba(245,255,0, 1) 75%,
        rgba(255,190,0, 1) 100%);
    left: ${props => props.initialPosition.x}px;
    top: ${props => props.initialPosition.y}px;
    animation: ${SparkAnimation} 1.1s ease-in forwards;

`

export default function Spark(props) {

    const [initialPosition, setInitialPosition] = useState({
        x: '',
        y: ''
    })

    useEffect(() => {
        setInitialPosition({
            x: props.mousePositionX + randomNumber(-15, 15),
            y: props.mousePositionY + randomNumber(20, 30)
        })
    }, [])

    return (
        <StyledSpark
            mousePositionX={props.mousePositionX}
            mousePositionY={props.mousePositionY}
            initialPosition={initialPosition}
        />
    )
}