import styled from "styled-components";

export const SocialIcons = styled.a`
  display: inline-block;
  width: 43px;
  height: 43px;
  margin: 0 10px;
  i {
    display: grid;
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    place-content: center;
    border: 2px solid;
    border-radius: 50%;
    transition: 0.3s;
    color: white;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.green};
      box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.green};
    }
  }
`;
