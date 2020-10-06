import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";

import img_clock from "../../img/clock.jpg";
import img_todo from "../../img/todo.jpg";
import img_calculator from "../../img/calculator.jpg";

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
              <Link to={`/project/clock`}>
                <img src={img_clock} alt="" />
              </Link>
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
              <Link to={`/project/todo`}>
                <img src={img_todo} alt="" />
              </Link>
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
              <Link to={`/project/calculator`}>
                <img src={img_calculator} alt="" />
              </Link>
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
