import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`

export const Warppin = styled.div`
  background: url(${(props) => props.backgroud});
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;
`

export const Description = styled.div`
  z-index: 2;
  width: 50%;
  padding: 20px;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 25px;
    font-weight: 400;
    color: #ffffff;
    margin: 30px 0 20px 0;
  }
`
export const Poster = styled.div`
  z-index: 2;
  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.7s linear;
  }
`
export const ContentButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`
