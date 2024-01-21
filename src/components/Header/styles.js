import styled from 'styled-components'

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  background-color: ${(props) =>
    props.changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.5s ease-in-out;
`
export const Img = styled.img`
  width: 25%;
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`
export const Li = styled.li`
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(pros) => (pros.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
