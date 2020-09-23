import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #091921;
`;

export const Clock = styled.div`
  display: flex;
  position: relative;
  width: 30vw;
  height: 30vw;
  justify-content: center;
  align-items: center;
  background: url("images/clock.png");
  background-size: cover;
  border: 4px solid #091921;
  box-shadow: 0 -1vw 1vw rgba(255, 255, 255, 0.05),
    inset 0 -1vw 1vw rgba(255, 255, 255, 0.05), 0 1vw 1vw rgba(0, 0, 0, 0.05),
    inset 0 1vw 1vw rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 1.2vw;
    height: 1.2vw;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1000;
  }
`;

export const Hour = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Hr = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  height: 50%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    width: 4%;
    height: 50%;
    background-color: #2dfa67;
    border-radius: 6px 6px 0 0;
    z-index: 10;
  }
`;

export const Minute = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Min = styled.div`
  display: flex;
  position: absolute;
  width: 60%;
  height: 60%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 2%;
    height: 50%;
    background-color: #fff;
    border-radius: 4px 4px 0 0;
    z-index: 11;
  }
`;

export const Second = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Sec = styled.div`
  position: absolute;
  display: flex;
  width: 75%;
  height: 75%;
  align-self: center;
  justify-self: center;
  justify-content: center;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 1%;
    height: 65%;
    background-color: red;
    border-radius: 2px 2px 0 0;
    z-index: 12;
  }
`;
