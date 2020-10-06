import React from "react";
import styled from "styled-components";

import { device } from "../../../utils/variables";

import { MdPhoneIphone } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import {
  SiHtml5,
  SiStyledComponents,
  SiJavascript,
  SiReact,
  SiGithub,
  SiGoogletranslate,
  SiUdemy,
  SiVisualstudiocode,
  SiYoutube,
} from "react-icons/si";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  justify-content: center;
  width: 100%;
  // height: 100vh;
  padding: 25vh 5px 5vh;
  background-color: ${({ theme }) => theme.colors.bgc};
`;

const H3Style = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 5rem;
`;
const MainStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  gap: 2rem;
  @media screen and (orientation: landscape) and (max-height: 500px) {
    grid-template-columns: 30vw 30vw;
  }
`;
const ArticleStyle = styled.article`
  display: grid;
  grid-template-columns: 30% 1fr;
  height: 200px;
  justify-items: center;
  align-items: center;
  border: 1px solid rgba(77, 77, 77, 0.3);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.box_shadow_out.small};
`;
const IconBox = styled.div`
  font-size: 4rem;
  display: grid;
  color: rgb(255, 199, 96);
`;
const ContentBox = styled.div`
  display: grid;
  padding-left: 1rem;
`;
const H5Title = styled.h5`
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
`;
const Description = styled.p`
  font-size: 0.8rem;
`;

const HomePageContent = () => {
  return (
    <>
      <Wrapper>
        <H3Style>They were used on my site:</H3Style>
        <MainStyle>
          <ArticleStyle>
            <IconBox>
              <SiHtml5></SiHtml5>
            </IconBox>
            <ContentBox>
              <H5Title>Html 5</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiStyledComponents></SiStyledComponents>
            </IconBox>
            <ContentBox>
              <H5Title>Styled Component</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiJavascript></SiJavascript>
            </IconBox>
            <ContentBox>
              <H5Title>Java Script</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiReact></SiReact>
            </IconBox>
            <ContentBox>
              <H5Title>React</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <MdPhoneIphone></MdPhoneIphone>
            </IconBox>
            <ContentBox>
              <H5Title>Mobile First</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiGithub></SiGithub>
            </IconBox>
            <ContentBox>
              <H5Title>GitHub</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiGoogletranslate></SiGoogletranslate>
            </IconBox>
            <ContentBox>
              <H5Title>Multilingual wWebsite</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiUdemy></SiUdemy>
            </IconBox>
            <ContentBox>
              <H5Title>Udemy</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiVisualstudiocode></SiVisualstudiocode>
            </IconBox>
            <ContentBox>
              <H5Title>Visual Studio Code</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <SiYoutube></SiYoutube>
            </IconBox>
            <ContentBox>
              <H5Title>YouTube</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
          <ArticleStyle>
            <IconBox>
              <GiFishingHook></GiFishingHook>
            </IconBox>
            <ContentBox>
              <H5Title>React Hooks</H5Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veniam incidunt?
              </Description>
            </ContentBox>
          </ArticleStyle>
        </MainStyle>
      </Wrapper>
    </>
  );
};

export default HomePageContent;
