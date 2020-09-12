import styled from "styled-components";

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 10px;
  letter-spacing: 2px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: red;
    color white;
  }
`;
