import styled from "styled-components";
import { Logo } from "../Logo.css";
import { Button } from "../Button.css";

export const H4 = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding-bottom: 20px;
`;
export const H5 = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const Div = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
export const Wrapper = styled.footer`
  width: 100%;
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 20px;
  ${Div} {
    max-width: 80vw;
    margin: 0 auto;
  }
`;
export const LogoFooter = styled(Logo)`
  display: inline-block;
  grid-area: logo;
  font-size: 2rem;
  padding-bottom: 10px;
`;
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    justify-content: space-around;
  }
`;
export const DivContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 30px;
`;
export const Contact = styled.div`
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  i {
    font-size: 2rem;
    padding-top: 5px;
  }
`;
export const Info = styled.a`
  display: grid;
  grid-template-columns: 50px 1fr;
  padding: 0 0 5px 0;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  color: white;
  list-style: none;
  text-decoration: none;
  &:nth-child(n + 3) {
    padding-top: 5px;
  }
  p {
    padding-bottom: 5px;
    font-size: 1rem;
    font-weight: normal;
  }
`;
export const Menu = styled.div`
  justify-self: center;
  @media screen and (min-width: 700px) and (orientation: portrait) {
    width: min-content;
    margin: 0 auto;
  }
  @media screen and (min-width: 700px) and (orientation: landscape) {
    width: min-content;
    margin: 0 auto;
  }
`;
export const NavFooter = styled.ul`
  li {
    padding: 10px 0 10px 0;
    border-bottom: 1px solid rgba(250, 250, 250, 0.2);
    a {
      font-size: 1.2rem;
      margin: 0;
      color: white;
    }
  }
`;
export const Subscribe = styled.div`
  input {
    width: 100%;
    line-height: 2;
    padding: 0 10px;
    border-radius: 5px;
    &: focus;
     {
      outline: none;
      box-shadow: none;
    }
  }
`;
export const ButtonFooter = styled(Button)`
  margin-top: 15px;
`;
export const DivWrapperSocialMedia = styled.div`
  padding: 20px 0;
  text-align: center;
  a {
    width: 30px;
    height: 30px;
    i {
      font-size: 1.2rem;
    }
  }
`;
