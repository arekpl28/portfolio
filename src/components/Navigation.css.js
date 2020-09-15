import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  z-index: 10000;
  &.sticky {
    padding: 5px 100px;
    background-color: #fff;
    box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.1);
  }
  &.sticky ul li a {
    color: #000;
    &:hover {
      color: red;
    }
  }
  &.sticky ul li a.active {
    color: red;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
