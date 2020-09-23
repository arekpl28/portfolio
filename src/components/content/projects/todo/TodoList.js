import React from "react";
import Todo from "./Todo";

import { DivTodoContainer, UlTodoList } from "./TodoList.css";

export default function TodoList({ todos, filteredTodos, setTodos }) {
  const todosList = filteredTodos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      setTodos={setTodos}
      text={todo.text}
      list={todos}
    ></Todo>
  ));

  return (
    <>
      <DivTodoContainer>
        <UlTodoList>{todosList}</UlTodoList>
      </DivTodoContainer>
    </>
  );
}
