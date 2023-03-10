import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Spark from './Components/Spark'

const StyledSparks = styled.div`
    position: absolute;
  `

export default function MouseSparks(props) {

  const numberOfSparks = 26

  const [mousePosition, setMousePosition] = useState({
    x: '',
    y: ''
  })
  const [mouseMoved, setMouseMoved] = useState(false)
  const [mouseOutOfWindow, setMouseOutOfWindow] = useState(false)
  const [sparks, setSparks] = useState(createSparksArray())
  const [iterator, setIterator] = useState(0)

  function createSparksArray() {
    let sparksArray = []
    for (let i = 0; i < numberOfSparks; i++) {
      sparksArray.push({ id: i, exists: false })
    }
    return sparksArray
  }

  const sparkElements = sparks.map(
    spark => (
      spark.exists &&
      <Spark
        key={spark.id}
        mousePositionX={mousePosition.x}
        mousePositionY={mousePosition.y}
      />
    )
  )

  useEffect(() => {
    function getMousePosition(event) {
      setMousePosition(
        {
          x: event.clientX,
          y: event.clientY
        }
      )
    }

    function mouseMoveListener() {
      getMousePosition(event)
      !mouseMoved && setMouseMoved(true)
    }

    function mouseLeaveListener() {
      setMouseOutOfWindow(true)
    }

    function mouseEnterListener() {
      setMouseOutOfWindow(false)
    }

    window.addEventListener('mousemove', mouseMoveListener)
    window.addEventListener('mouseout', mouseLeaveListener)
    window.addEventListener('mouseover', mouseEnterListener)

    return () => {
      window.removeEventListener('mousemove', mouseMoveListener)
    }
  }, [])

  useEffect(() => {

    const sparksEffect = setTimeout(() => {
      createSpark()
      removeSpark()
      setIterator(prevState => prevState + 1 > numberOfSparks ? 0 : prevState + 1)
    }
      , 85)

    function createSpark() {
      setSparks(prevState => {
        return prevState.map(spark => spark.id !== iterator ? spark : {
          ...spark,
          exists: true
        })
      })
    }

    function removeSpark() {
      setSparks(prevState => {
        return prevState.map(spark => spark.id !== (
          iterator + parseInt(numberOfSparks/2) > numberOfSparks ?
          iterator + parseInt(numberOfSparks/2) - numberOfSparks
          : iterator + parseInt(numberOfSparks/2)
          ) ? spark : {
          ...spark,
          exists: false
        })
      })
    }
  }, [iterator])

  return (

    <div>
      {mouseMoved && !mouseOutOfWindow && sparkElements}
    </div>
  )
}