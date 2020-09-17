import styled from "styled-components";
import { device } from "../utils/variables";

export const SocialIcons = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  text-decoration: none;
  i {
    display: grid;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    place-content: center;
    border: 1px solid;
    border-radius: 50%;
    transition: 0.3s;
    color: white;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.green};
      box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.green};
    }
  }
  @media screen and ${device.mobileL} {
    width: 35px;
    height: 35px;
    i {
      font-size: 1.8rem;
    }
  }
  @media screen and ${device.surface} {
    width: 45px;
    height: 45px;
    i {
      font-size: 2rem;
      border: 2px solid;
    }
  }
  @media screen and ${device.tablet} {
    width: 60px;
    height: 60px;
    margin: 0 10px;
    i {
      font-size: 2.5rem;
    }
  }
  @media screen and ${device.laptop} and (orientation: portrait) {
    width: 80px;
    height: 80px;
    margin: 0 15px;
    i {
      font-size: 3rem;
    }
  }
  @media screen and ${device.mobileL} and (orientation: landscape) {
    width: 25px;
    height: 25px;
    margin: 0px 5px;
    i {
      font-size: 1.2rem;
    }
  }
  @media screen and ${device.surface} and (orientation: landscape) {
    width: 30px;
    height: 30px;
    i {
      font-size: 1.4rem;
      border: 1px solid;
    }
  }
  @media screen and ${device.laptop} and (orientation: landscape) {
    width: 40px;
    height: 40px;
    margin: 0px 10px;
    i {
      font-size: 1.8rem;
      border: 2px solid;
    }
  }
  @media screen and ${device.laptopM} {
    width: 50px;
    height: 50px;
    i {
      font-size: 2rem;
    }
  }
  @media screen and ${device.desktop} {
    width: 70px;
    height: 70px;
    i {
      font-size: 3rem;
    }
  }
  @media screen and ${device.desktopM} {
    width: 100px;
    height: 100px;
    margin: 0 25px;
    i {
      font-size: 4rem;
    }
  }
`;
