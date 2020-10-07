import styled from "styled-components";

export const Lg = styled.div`
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 2.5;
  text-decoration: none;
  color: ${({ theme }) => theme.text.color};
  transition: 0.6s;
  outline: 0;
`;
