import React, { useState } from "react";
import styled from "styled-components";

import ClockApp from "./projects/clock/ClockApp";

// const Wrapper = styled.div``;
// const Container = styled.div``;

// const Box = styled.section`
//   display: grid;
//   width: 100vw;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

//   grid-gap: 3vw;
//   padding: 3vw;
//   margin: 0 auto;
// `;

// const ImgBox = styled.div`
//   width: 100%;
//   height: 300px;
//   overflow: hidden;
//   background: url(images/clock.jpg);
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// `;
// const ContentBox = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e7ee;
`;
const Container = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 4vw;
  padding: 4vw;
  margin: 0 auto;
  &.blue {
    filter: blur(2px);
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  box-shadow: 6px 6px 12px #b8b9be, -6px -6px 12px #fff;
`;

const ImgBox = styled.div`
  padding-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const ContentBox = styled.div`
  transform-origin: top;
  transition: 0.6s;
  h2 {
    font-weight: normal;
  }
  p {
    text-align: justify;
  }
`;

const Button = styled.button`
  font-family: "Nunito", sans-serif;
  color: #31344b;
  margin: 20px 0 5px 5px;
  padding: 5px 10px;
  letter-spacing: 1px;
  line-height: 1.5;
  background-color: #e6e7ee;
  border-radius: 10px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  cursor: pointer;
  &:hover {
    color: #31344b;
    background-color: #e6e7ee;
    border-color: #e6e7ee;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
  }
`;

const ModalWrapper = styled.section`
  position: fixed;
  display: grid;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position: absolute;
  display: grid;
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 80%;
  background-color: #e6e7ee;
  border-radius: 20px;
`;
const Close = styled.span`
  position: absolute;
  top: 0%;
  right: 0%;
  font-size: 30px;
  margin: 10px 20px;
  color: green;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Middle = styled.div`
  background: red;
  width: 60%;
  height: 90%;
  justify-self: center;
  align-self: center;
`;

export default function ProjectsPage() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <Wrapper>
        <Container>
          <Box>
            <ImgBox>
              <img src="images/clock.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Tilt Box Hover Effects</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit vitae at laudantium quam, maxime nihil modi adipisci
                exercitationem ipsa{" "}
              </p>
              <Button onClick={() => setActive(true)}>See More</Button>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <img src="images/clock.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Tilt Box Hover Effects</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit vitae at laudantium quam, maxime nihil modi adipisci
                exercitationem ipsa{" "}
              </p>
              <Button onClick={() => setActive(true)}>See More</Button>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <img src="images/clock.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Tilt Box Hover Effects</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit vitae at laudantium quam, maxime nihil modi adipisci
                exercitationem ipsa{" "}
              </p>
              <Button onClick={() => setActive(true)}>See More</Button>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <img src="images/clock.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Tilt Box Hover Effects</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit vitae at laudantium quam, maxime nihil modi adipisci
                exercitationem ipsa{" "}
              </p>
              <Button onClick={() => setActive(true)}>See More</Button>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <img src="images/clock.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Tilt Box Hover Effects</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit vitae at laudantium quam, maxime nihil modi adipisci
                exercitationem ipsa{" "}
              </p>
              <Button onClick={() => setActive(true)}>See More</Button>
            </ContentBox>
          </Box>
        </Container>
        {active ? (
          <ModalWrapper>
            <Modal>
              <Middle>
                <ClockApp></ClockApp>
              </Middle>
              <Close onClick={() => setActive(false)}>
                <i className="far fa-times-circle"></i>
              </Close>
            </Modal>
          </ModalWrapper>
        ) : null}
      </Wrapper>

      {/* <ClockApp></ClockApp> */}
    </>
  );
}
