import React from "react";
import styled from "styled-components";

const Form = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
`;
const Button = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
  color: #ff6f47;
  background: #f7fffe;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #ff6f47;
    color: white;
  }
`;
const Select = styled.select`
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
  color: #ff6f47;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 12rem;
  padding: 1rem;
`;
const DivSelect = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  &:after {
    content: "↓";
    position: absolute;
    top: -15px;
    right: 0;
    padding: 1rem;
    font-size: 30px;
    background: #ff6f47;
    cursor: pointer;
    pointer-events: none;
  }
`;
let idNumer = 0;
export default function FormTodo({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  const handlerInputText = (e) => {
    setInputText(e.target.value);
  };

  const handlerClickAddTodo = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    } else {
      setTodos([...todos, { id: idNumer, text: inputText, completed: false }]);
      setInputText("");
      idNumer++;
    }
  };

  const handlerSelect = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Form>
        <Input value={inputText} onChange={handlerInputText} type="text" />
        <Button onClick={handlerClickAddTodo} type="submit">
          <i className="fas fa-plus-square"></i>
        </Button>
        <DivSelect>
          <Select onChange={handlerSelect} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Select>
        </DivSelect>
      </Form>
    </>
  );
}
