import styled from 'styled-components'
import { BackgroundSharp } from './components/BackgroundSharp'
import { StarIcon } from './components/StarIcon'

function App() {
  return (
    <ContainerStyled>
      <ButtonWrapperStyled>
        <BoxShadowStyled />
        <BackgroundStyled>
          <BackgroundSharp />
        </BackgroundStyled>
        <RingStyled />
        <ButtonStyled>
          <BorderBottomStyled />
          <BorderTopStyled />
          <InnerFillStyled>
            <InnerGlowStyled />
          </InnerFillStyled>
          <ContentStyled>
            <StarsStyled>
              <div className='star small'>
                <StarIcon />
              </div>
              <div className='star medium'>
                <StarIcon />
              </div>
              <div className='star big'>
                <StarIcon />
              </div>
            </StarsStyled>
            <span>AI Translation</span>
          </ContentStyled>
        </ButtonStyled>
      </ButtonWrapperStyled>
    </ContainerStyled>
  )
}

const WIDTH = 238
const HEIGHT = 68
const HALF_HEIGHT = HEIGHT / 2
const HALF_WIDTH = WIDTH / 2

const BoxShadowStyled = styled.div`
  position: absolute;
  top: calc(50% - ${HALF_HEIGHT}px);
  left: calc(50% - ${HALF_WIDTH}px);
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow: visible;
  border-radius: ${HALF_HEIGHT}px;
  box-shadow: rgba(146, 56, 255, 0) 0 0 0 0;
  transition: box-shadow 0.5s ease;
`

const BackgroundStyled = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.5s ease;
`

const RingStyled = styled.div`
  width: ${WIDTH + 12}px;
  height: ${HEIGHT + 12}px;
  background: radial-gradient(
    68.5% 119.738% at 49.1% 100%,
    rgb(175, 120, 245) 0%,
    rgb(116, 56, 255) 100%
  );
  opacity: 0;
  border-radius: ${(HEIGHT + 12) / 2}px;
  box-shadow: rgba(15, 7, 32, 0) 0px 0px 0px 0px;
  transform: scale(0.9, 0.9);
  transform-origin: 50% 50% 0px;

  transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease;
`

const BorderStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${HALF_HEIGHT}px;
  opacity: 0;

  &::before {
    content: '';
    width: 70px;
    height: 100%;
    display: block;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }
`

const BorderBottomStyled = styled(BorderStyled)`
  bottom: 0;

  &::before {
    animation: slideToLeft 2.5s ease infinite;
    transform: translateX(${WIDTH}px);
  }

  @keyframes slideToLeft {
    0% {
      transform: translateX(${WIDTH}px);
    }
    45% {
      transform: translateX(${WIDTH}px);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const BorderTopStyled = styled(BorderStyled)`
  top: 0;

  &::before {
    animation: slideToRight 2.5s ease infinite;
    transform: translateX(-100%);
  }

  @keyframes slideToRight {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(${WIDTH}px);
    }
    100% {
      transform: translateX(${WIDTH}px);
    }
  }
`

const InnerFillStyled = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: rgb(29, 29, 29);
  border-radius: ${HALF_HEIGHT}px;
  transition: background-color 0.5s ease;
`

const InnerGlowStyled = styled.div`
  position: absolute;
  bottom: -54px;
  left: -9px;
  right: -10px;
  height: 103px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(193, 130, 252) 0%,
    rgba(118, 58, 254, 0) 100%
  );
  border-radius: 50%;
  opacity: 0;

  overflow: hidden;
  transition: opacity 0.5s ease;
`

const ContentStyled = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;

  opacity: 0.4;
  transition: opacity 0.5s ease;

  span {
    font-size: 22px;
    color: #fff;
    font-weight: 700;
    letter-spacing: -0.2;
  }
`

const StarsStyled = styled.div`
  height: 28px;
  width: 28px;
  position: relative;

  .star {
    position: absolute;
    animation-timing-function: ease;
    animation-duration: 0ms;
    animation-delay: 2s;
    animation-iteration-count: infinite;

    &.small {
      top: 0;
      left: 4px;
      width: 6px;
      height: 6px;
      opacity: 0.3;
      animation-name: starSmall;

      @keyframes starSmall {
        0% {
          transform: scale(1);
          opacity: 0.3;
        }
        14% {
          transform: scale(1);
          opacity: 0.3;
        }
        22% {
          transform: scale(1.8);
          opacity: 1;
        }
        30% {
          transform: scale(1);
          opacity: 0.3;
        }
      }
    }

    &.medium {
      top: 17px;
      left: 1px;
      width: 12px;
      height: 12px;
      opacity: 0.3;
      animation-name: starMedium;

      @keyframes starMedium {
        0% {
          transform: scale(1);
          opacity: 0.3;
        }
        7% {
          transform: scale(1.5);
          opacity: 1;
        }
        14% {
          transform: scale(1);
          opacity: 0.3;
        }
      }
    }

    &.big {
      top: 3px;
      left: 8px;
      width: 18px;
      height: 19px;
      opacity: 1;
      animation-name: starBig;

      @keyframes starBig {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        20% {
          transform: scale(0.7);
          opacity: 0.3;
        }
        30% {
          transform: scale(1.3);
          opacity: 1;
        }
        60% {
          transform: scale(1);
        }
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const ButtonStyled = styled.div`
  position: absolute;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${HALF_HEIGHT}px;
  box-shadow: rgba(32, 8, 73, 0) 0px 0px 0px 0px, rgba(115, 59, 247, 0) 0px 0px 0px 0px,
    rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 0px 0px,
    rgba(91, 61, 199, 0) 0px 0px 0px 0px;
  background: none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0);
  overflow: hidden;
  transition: all 0.5s ease;
`

const ButtonWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${BoxShadowStyled} {
      box-shadow: rgba(146, 56, 255, 0.4) 0px 0px 280px 60px;
    }
    ${BackgroundStyled} {
      opacity: 1;
    }
    ${RingStyled} {
      opacity: 0.5;
      box-shadow: rgba(15, 7, 32, 1) 0px 16px 32px 0px;
      transform: scale(1);
    }
    ${BorderStyled} {
      opacity: 1;
    }
    ${InnerFillStyled} {
      background-color: rgb(118, 58, 254);
      top: 2px;
      bottom: 2px;
    }
    ${InnerGlowStyled} {
      opacity: 1;
    }
    ${ButtonStyled} {
      box-shadow: rgba(32, 8, 73, 0.3) 0px 16px 32px 0px, rgba(115, 59, 247, 0.6) 0px 16px 32px 0px,
        rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 0px 0px,
        rgb(91, 61, 199) 0px 0px 120px 0px;
      background: linear-gradient(rgb(136, 85, 255) 0%, rgb(120, 61, 255) 100%);
    }
    ${ContentStyled} {
      opacity: 1;
    }
    ${StarsStyled} {
      .star {
        animation-duration: 2000ms;
      }
    }
  }
`

const ContainerStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(17, 17, 17);
  transition: background 0.5s ease;
  &:has(${ButtonWrapperStyled}:hover) {
    background: rgb(16, 0, 46);
  }
`

export default App

// linear-gradient(281deg, #ff00fb 0%, rgb(153, 0, 255) 46.66209177927928%, var(rgb(0, 153, 255), rgb(0, 153, 255)) /* {"name":"Blue"} */ 100%)
