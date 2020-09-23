import styled from "styled-components";

export const Form = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
`;

export const Button = styled.button`
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

export const Select = styled.select`
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

export const DivSelect = styled.div`
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
