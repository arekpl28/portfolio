import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  top: 0%;
  left: 0%;
  padding-top: 100px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Name = styled.h1`
  font-size: 8rem;
  font-weight: 600;
`;

export const Profession = styled.p`
  font-size: 3.5rem;
  font-weight: 200;
`;

export const DivProfileImg = styled.div`
  position: absolute;
  max-width: 300px;
  max-height: 300px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 15px solid rgba(250, 250, 250, 0.5);
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
