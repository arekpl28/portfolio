import React from "react";
import styled from "styled-components";

const DivTodo = styled.div`
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  border: none;
`;
const Li = styled.li`
  flex: 1;
  padding: 0rem 0.5rem;
`;
const BtnComplete = styled.button`
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  background: rgb(11, 212, 162);
`;
const BtnTrash = styled(BtnComplete)`
  background: #ff6f47;
`;

export default function Todo({ text, id, completed, list, setTodos }) {
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
  return (
    <DivTodo>
      <Li className={completed ? "completed" : ""}>{text}</Li>
      <BtnComplete onClick={handlerComplete}>
        <i className="fas fa-check"></i>
      </BtnComplete>
      <BtnTrash onClick={handlerDelete}>
        <i className="fas fa-trash"></i>
      </BtnTrash>
    </DivTodo>
  );
}
