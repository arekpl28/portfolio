import styled from "styled-components";
import { Logo } from "./Logo.css";
import { Button } from "./Button.css";

export const H4 = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

export const H5 = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #000;
  color: white;
`;

export const LogoFooter = styled(Logo)`
  display: inline-block;
  grid-area: logo;
  font-size: 2rem;
  padding: 20px 0 0 100px;
`;

export const Content = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 250px 200px 250px;
  grid-template-rows: auto auto;
  grid-template-areas: "contact menu email" "social social social";
  padding: 20px 50px;
  justify-content: space-between;
  row-gap: 20px;
`;

export const Contact = styled.div`
  grid-area: contact;
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
  cursor: pointer;
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
  &:hover i {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Menu = styled.div`
  grid-area: menu;
  justify-self: center;
`;

export const NavFooter = styled.ul`
  li {
    padding: 0 0 10px 0;
    a {
      margin: 0;
      font-size: 1.2rem;
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
  grid-area: social;
  padding: 20px 0;
  border-top: 1px solid rgba(250, 250, 250, 0.2);
  text-align: center;
  a {
    width: 30px;
    height: 30px;
    i {
      font-size: 1.2rem;
    }
  }
`;
