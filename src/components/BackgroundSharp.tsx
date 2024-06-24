import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const BackgroundSharp = () => {
  const [translate, setTranslate] = useState({ x: '0', y: '0' })

  const func = () => {
    setInterval(() => {
      setTranslate({
        x: (Math.random() * (10 - -10) + -10).toFixed(2),
        y: (Math.random() * (10 - -10) + -10).toFixed(2),
      })
    }, 200)
  }

  useEffect(() => {
    func()
  }, [])

  return (
    <BackgroundSharpStyled
      style={{
        transform: `translateX(${translate.x}%) translateY(${translate.y}%) translateZ(0px)`,
      }}
    />
  )
}

const BackgroundSharpStyled = styled.div`
  background: url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png);
  opacity: 0.03;
  inset: -200%;
  width: 400%;
  height: 400%;
  position: absolute;
`
