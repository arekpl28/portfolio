import React, { useContext } from "react";

import { Wrapper, Name } from "./ProjectsContentHeader.css";

import { DataContext } from "../../../context/DataProvider";

export default function ProjectsContentHeader() {
  const { projectName, t } = useContext(DataContext);
  console.log(projectName);
  return (
    <>
      <Wrapper>
        <Name>{t(`${projectName}`)}</Name>
      </Wrapper>
    </>
  );
}
