import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
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
} from "./ProjectPageContent.css";

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
            <Route path="/project/clock" component={ClockApp}></Route>
            <Route path="/project/todo" component={TodoApp}></Route>
          </DivProject>
        </DivConetnt>
      </Wrapper>
    </>
  );
}
