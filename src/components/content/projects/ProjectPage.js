import React from "react";
import ClockApp from "./clock/ClockApp";
import TodoApp from "./todo/TodoApp";

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
  // console.log(props.match.params.id);
  const pathPage = props.match.params.id;
  return (
    <>
      <Wrapper>
        <h1>Project {pathPage}</h1>
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
