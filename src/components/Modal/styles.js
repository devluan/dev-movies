import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  background: #000000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    padding: 0;
    margin: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
