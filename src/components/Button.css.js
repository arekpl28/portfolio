import styled from "styled-components";

export const Button = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.55rem 0.95rem;
  letter-spacing: 0.025em;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.55rem;
  border: 0.06rem solid rgba(30, 30, 30, 0.1);
  box-shadow: 2px 2px 5px #b8b9be, -3px -3px 7px #fff;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
    boeder: none;
  }
`;
