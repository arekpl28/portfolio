import React, { useContext, useEffect } from "react";
import ClockApp from "./clock/ClockApp";
import TodoApp from "./todo/TodoApp";

import { DataContext } from "../../../context/DataProvider";

import {
  Wrapper,
  DivConetnt,
  DivMenu,
  DivRest,
  LinkProjects,
  LinkMenu,
  DivProject,
} from "./ProjectPage.css";

export default function ProjectPage(props) {
  const { setProjectName } = useContext(DataContext);
  const pathPage = props.match.params.id;

  useEffect(() => {
    setProjectName(pathPage);
  }, [pathPage, setProjectName]);

  return (
    <>
      <Wrapper>
        <DivConetnt>
          <DivMenu>
            <LinkProjects exact to="/projects">
              All projects
            </LinkProjects>
            <DivRest>
              <LinkMenu to="/project/clock">Clock</LinkMenu>
              <LinkMenu to="/project/todo">Todo</LinkMenu>
            </DivRest>
          </DivMenu>
          <DivProject>
            {pathPage === "clock" ? <ClockApp></ClockApp> : <TodoApp></TodoApp>}
          </DivProject>
        </DivConetnt>
      </Wrapper>
    </>
  );
}
