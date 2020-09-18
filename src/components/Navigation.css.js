import styled from "styled-components";
import { Logo } from "./Logo.css";
import { device } from "../utils/variables";

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
  @media screen and ${device.tablet} {
    display: none;
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
    @media screen and ${device.laptopM} {
      padding: 10px 40px;
    }
    @media screen and ${device.laptopL} {
      padding: 10px 50px;
    }
    @media screen and ${device.desktop} {
      padding: 20px 60px;
      ul li a {
        font-size: 2rem;
      }
    }
    @media screen and ${device.desktopM} {
      padding: 40px 90px;
      ul li a {
        font-size: 3rem;
      }
    }
    @media screen and ${device.tablet} {
      ul li a {
        color: rgb(30, 30, 30);
        font-size: 1.6rem;
        &:hover {
          color: green;
        }
        &.active {
          color: red;
        }
      }
    }

    @media screen and (max-width: 767) {
      & ul {
        top: 50px;
        height: calc(100vh - 50px);
        padding-top: 30px;
      }
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
      @media screen and ${device.desktopM} {
        font-size: 4rem;
      }
    }
  }
  @media screen and ${device.mobileS} {
    padding: 20px 30px;
  }

  @media screen and ${device.tablet} and (orientation: portrait) {
    display: flex;
    position: fixed;
    padding: 60px;
  }
  @media screen and ${device.laptopL} {
    padding: 60px 100px;
  }
`;
export const NavUl = styled.ul`
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
  @media screen and ${device.tablet} {
    display: flex;
    transform: translateX(0%);
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 100%;
    width: unset;
    padding-top: unset;
    padding-right: 50px;
  }
  @media screen and ${device.laptopM} {
    padding-right: 100px;
  }
`;
