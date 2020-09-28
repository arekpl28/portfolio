import React from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

import { DivTodoApp, DivWrapper, H2 } from "./TodoApp.css";

export default function TodoApp() {
  return (
    <>
      <DivTodoApp>
        <DivWrapper>
          <H2>Todo App</H2>
          <FormTodo></FormTodo>
          <TodoList></TodoList>
        </DivWrapper>
      </DivTodoApp>
    </>
  );
}
