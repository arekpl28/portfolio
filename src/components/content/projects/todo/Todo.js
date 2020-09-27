import React from "react";

import { DivTodo, Number, Li, BtnComplete, BtnTrash } from "./Todo.css";

export default function Todo({ text, id, index, completed, list, setTodos }) {
  const handlerComplete = () => {
    setTodos(
      list.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const handlerDelete = () => {
    let todoList = [...list];
    todoList.splice(id, 1);
    for (let i = 0; i < todoList.length; i++) {
      todoList[i].id = i;
    }
    setTodos(todoList);
  };
  console.log(index);
  return (
    <DivTodo>
      <Number className={completed ? "completed" : ""}>{`No. ${
        index + 1
      }`}</Number>
      <Li className={completed ? "completed" : ""}>{text}</Li>
      <BtnComplete onClick={handlerComplete}>
        <i
          className={completed ? "completed fas fa-check" : "fas fa-check"}
          // className="fas fa-check"
        ></i>
      </BtnComplete>
      <BtnTrash onClick={handlerDelete}>
        <i className="fas fa-trash"></i>
      </BtnTrash>
    </DivTodo>
  );
}
