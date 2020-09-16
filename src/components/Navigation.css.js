import styled from "styled-components";
import { Logo } from "./Logo.css";

export const Line = styled.div``;

export const Burger = styled.div`
  cursor: pointer;
  transition: 0.6s;
  z-index: 10;
  ${Line} {
    width: 25px;
    height: 2px;
    margin-bottom: 7px;
    transform-origin: center right;
    background-color: ${({ theme }) => theme.colors.bgcBurger};
    transition: all 0.6s ease;
  }
  &.burgerActive ${Line} {
    background-color: ${({ theme }) => theme.colors.bgcBurgerActive};
    &:nth-child(1) {
      transform: rotate(-45deg);
    }
    &:nth-child(2) {
      transform: rotate(0deg);
      background-color: transparent;
    }
    &:nth-child(3) {
      transform: rotate(45deg);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  z-index: 10000;
  &.sticky {
    height: 50px;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.bgcNav};
    box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
    & ul {
      top: 50px;
      height: calc(100vh - 50px);
      padding-top: 30px;
    }
    & ${Burger} ${Line} {
      width: 20px;
      margin-bottom: 5px;
      background-color: ${({ theme }) => theme.colors.bgcBurgerSticky};
    }
    & ${Burger}.burgerActive ${Line} {
      background-color: ${({ theme }) => theme.colors.bgcBurgerActive};
      &:nth-child(1) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        transform: rotate(0deg);
        background-color: transparent;
      }
      &:nth-child(3) {
        transform: rotate(45deg);
      }
    }
    & ${Logo} {
      font-size: 2rem;
    }
  }
`;

export const NavUl = styled.ul`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 50px);
  text-align: center;
  height: 100vh;
  width: 65vw;
  top: 0px;
  right: 0px;
  padding-top: 80px;
  background-color: rgb(30, 30, 30);
  transform: translateX(100%);
  transition: 0.6s;
  &.navActive {
    transition: 0.6s;
    transform: translateX(0);
  }
`;
