import React from "react";
import Todo from "./Todo";

import { DivTodoContainer, UlTodoList, Bar } from "./TodoList.css";

export default function TodoList({ todos, filteredTodos, setTodos }) {
  const todosList = filteredTodos.map((todo, index) => (
    <Todo
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      setTodos={setTodos}
      text={todo.text}
      list={todos}
      index={index}
    ></Todo>
  ));

  return (
    <>
      <DivTodoContainer>
        <UlTodoList>
          <Bar>{todosList.reverse()}</Bar>
        </UlTodoList>
      </DivTodoContainer>
    </>
  );
}
