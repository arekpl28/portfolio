import React, { useContext } from "react";

// import { DataContext } from "../../../context/DataProvider";
import { DataContext } from "../../context/DataProvider";

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
  LinkHomePage,
} from "./Article.css";

const homeList = [
  {
    id: 0,
    icon: <SiHtml5 />,
    title: "Html 5",
    description: "Home_Page.html5",
    href: "https://www.udemy.com/certificate/UC-DSKKTAP6/",
  },
  {
    id: 1,
    icon: <SiStyledComponents />,
    title: "Styled Component",
    description: "Home_Page.css",
    href: "https://www.udemy.com/certificate/UC-ZYMBG0CZ/",
  },
  {
    id: 2,
    icon: <SiJavascript />,
    title: "Java Script",
    description: "Home_Page.java_script",
    href: "https://www.udemy.com/certificate/UC-8IOM9RG2/",
  },
  {
    id: 3,
    icon: <SiReact />,
    title: "React",
    description: "Home_Page.react",
    href: "https://www.udemy.com/certificate/UC-KH050YQH/",
  },
  {
    id: 4,
    icon: <MdPhoneIphone />,
    title: "Mobile First",
    description: "Home_Page.mobile_first",
    href: null,
  },
  {
    id: 5,
    icon: <SiGithub />,
    title: "GitHub",
    description: "Home_Page.github",
    href: "https://www.udemy.com/certificate/UC-8AGMHZCW/",
  },
  {
    id: 6,
    icon: <SiGoogletranslate />,
    title: "Multilingual website",
    description: "Home_Page.multilingual",
    href: null,
  },
  {
    id: 7,
    icon: <SiUdemy />,
    title: "Udemy",
    description: "Home_Page.udemy",
    href: null,
  },
  {
    id: 8,
    icon: <SiVisualstudiocode />,
    title: "Visual Studio Code",
    description: "Home_Page.vsc",
    href: null,
  },
  {
    id: 9,
    icon: <SiYoutube />,
    title: "YouTube",
    description: "Home_Page.youtube",
    href: null,
  },
  {
    id: 10,
    icon: <GiFishingHook />,
    title: "React Hooks",
    description: "Home_Page.hooks",
    href: null,
  },
  {
    id: 11,
    icon: <CgWebsite />,
    title: "More in Website",
    description: "Home_Page.website",
    href: null,
  },
  {
    id: 12,
    icon: <MdUpdate />,
    title: "Update on Website",
    description: "Home_Page.update",
    href: null,
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
        {item.href ? (
          <LinkHomePage
            target="blank"
            to="https://www.udemy.com/certificate/UC-DSKKTAP6/"
          >
            {t("Certificate")}
          </LinkHomePage>
        ) : null}
      </ContentBox>
    </ArticleStyle>
  ));
  return <>{listHome}</>;
};

export default Article;
