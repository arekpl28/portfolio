import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataProvider";

import {
  Wrapper,
  Container,
  Box,
  ImgBox,
  ContentBox,
  LinkApp,
} from "./ProjectListPage.css";

export default function ProjectListPage(props) {
  const { setProjectName, setPath } = useContext(DataContext);
  useEffect(() => {
    setProjectName("My projects");
    setPath(props.match.path);
  }, [props.match.path, setPath, setProjectName]);
  return (
    <>
      <Wrapper>
        <Container>
          <Box>
            <ImgBox>
              <img src="images/clock.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Clock</h2>
              <p>
                A clock inspired by Neumorphism design, fully responsive with
                the current time.
              </p>
              <LinkApp to={`/project/clock`}>See More</LinkApp>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <img src="images/todo.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Todo</h2>
              <p>
                A clock inspired by Neumorphism design, fully responsive with
                the current time.
              </p>
              <LinkApp to={`/project/todo`}>See More</LinkApp>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <img src="images/calculator.jpg" alt="" />
            </ImgBox>
            <ContentBox>
              <h2>Calculator</h2>
              <p>
                A clock inspired by Neumorphism design, fully responsive with
                the current time.
              </p>
              <LinkApp to={`/project/calculator`}>See More</LinkApp>
            </ContentBox>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
