import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 85vh;
  top: 0%;
  left: 0%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Name = styled.h1`
  position: absolute;
  width: 100%;
  left: 0%;
  bottom: 45vh;
  font-size: 8vw;
  padding: 0 10px;
  font-weight: 600;
`;

export const Profession = styled.p`
  position: absolute;
  width: 100%;
  bottom: 40vh;
  left: 0%;
  font-size: 4vw;
  font-weight: 200;
`;
export const DivMedia = styled.div`
  position: absolute;
  width: 100%;
  bottom: 30vh;
`;

export const DivProfileImg = styled.div`
  position: absolute;
  max-width: 300px;
  max-height: 300px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 15vh);
  border: 10px solid rgba(250, 250, 250, 0.5);
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
