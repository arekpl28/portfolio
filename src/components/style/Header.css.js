import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BgImg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(images/header.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -9;
`;

export const Dark = styled.div`
  position: absolute;
  width: 100%;
  height: 85vh;
  background-color: #000;
  opacity: 0.7;
  z-index: -8;
`;
