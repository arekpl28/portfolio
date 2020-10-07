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
  const { setProjectName, setPath, t } = useContext(DataContext);
  useEffect(() => {
    setProjectName("My_projects");
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
              <h2>{t("Clock")}</h2>
              <p>{t("Description_project_card_clock")}</p>
              <LinkApp to={`/project/clock`}>{t("See_more")}</LinkApp>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <Link to={`/project/todo`}>
                <img src={img_todo} alt="" />
              </Link>
            </ImgBox>
            <ContentBox>
              <h2>{t("Todo")}</h2>
              <p>{t("Description_project_card_todo")}</p>
              <LinkApp to={`/project/todo`}>{t("See_more")}</LinkApp>
            </ContentBox>
          </Box>
          <Box>
            <ImgBox>
              <Link to={`/project/calculator`}>
                <img src={img_calculator} alt="" />
              </Link>
            </ImgBox>
            <ContentBox>
              <h2>{t("Calculator")}</h2>
              <p>{t("Description_project_card_calculator")}</p>
              <LinkApp to={`/project/calculator`}>{t("See_more")}</LinkApp>
            </ContentBox>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
