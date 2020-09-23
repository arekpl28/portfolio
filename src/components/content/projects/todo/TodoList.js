import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const DivTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UlTodoList = styled.ul`
  min-width: 30%;
  list-style: none;
  border: none;
  li.completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;

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
