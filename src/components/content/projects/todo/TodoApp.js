import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

import { DivWrapper } from "./TodoApp.css";

const H2 = styled.h2``;

export default function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "all":
        setFilteredTodos(todos);
        break;

      default:
        break;
    }
  }, [todos, status]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <DivWrapper>
        <H2>TODO List</H2>
        <FormTodo
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
        ></FormTodo>
        <TodoList
          todos={todos}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
        ></TodoList>
      </DivWrapper>
    </>
  );
}
