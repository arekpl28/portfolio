import React, { useContext } from "react";

import { DataContext } from "../../../context/DataProvider";

import { MdPhoneIphone, MdUpdate } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
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

import {
  ArticleStyle,
  IconBox,
  ContentBox,
  H5Title,
  Description,
} from "./Article.css";

const homeList = [
  {
    id: 0,
    icon: <SiHtml5 />,
    title: "Html 5",
    description: "Home_Page.html5",
  },
  {
    id: 1,
    icon: <SiStyledComponents />,
    title: "Styled Component",
    description: "Home_Page.css",
  },
  {
    id: 2,
    icon: <SiJavascript />,
    title: "Java Script",
    description: "Home_Page.java_script",
  },
  {
    id: 3,
    icon: <SiReact />,
    title: "React",
    description: "Home_Page.react",
  },
  {
    id: 3,
    icon: <MdPhoneIphone />,
    title: "Mobile First",
    description: "Home_Page.mobile_first",
  },
  {
    id: 4,
    icon: <SiGithub />,
    title: "GitHub",
    description: "Home_Page.github",
  },
  {
    id: 5,
    icon: <SiGoogletranslate />,
    title: "Multilingual website",
    description: "Home_Page.multilingual",
  },
  {
    id: 6,
    icon: <SiUdemy />,
    title: "Udemy",
    description: "Home_Page.udemy",
  },
  {
    id: 7,
    icon: <SiVisualstudiocode />,
    title: "Visual Studio Code",
    description: "Home_Page.vsc",
  },
  {
    id: 8,
    icon: <SiYoutube />,
    title: "YouTube",
    description: "Home_Page.youtube",
  },
  {
    id: 9,
    icon: <GiFishingHook />,
    title: "React Hooks",
    description: "Home_Page.hooks",
  },
  {
    id: 10,
    icon: <CgWebsite />,
    title: "More in Website",
    description: "Home_Page.website",
  },
  {
    id: 11,
    icon: <MdUpdate />,
    title: "Update on Website",
    description: "Home_Page.update",
  },
];

const Article = () => {
  const { t } = useContext(DataContext);

  const listHome = homeList.map((item) => (
    <ArticleStyle key={item.id}>
      <IconBox>{item.icon}</IconBox>
      <ContentBox>
        <H5Title>{item.title}</H5Title>
        <Description>{t(item.description)}</Description>
      </ContentBox>
    </ArticleStyle>
  ));
  return <>{listHome}</>;
};

export default Article;
