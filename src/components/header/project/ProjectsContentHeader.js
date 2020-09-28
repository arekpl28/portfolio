import React, { useContext } from "react";

import { Wrapper, Name } from "./ProjectsContentHeader.css";

import { DataContext } from "../../../context/DataProvider";

export default function ProjectsContentHeader() {
  const { projectName } = useContext(DataContext);
  return (
    <>
      <Wrapper>
        <Name>{projectName}</Name>
      </Wrapper>
    </>
  );
}
