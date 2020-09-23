import styled from "styled-components";

export const DivTodo = styled.div`
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

export const Li = styled.li`
  flex: 1;
  padding: 0rem 0.5rem;
`;

export const BtnComplete = styled.button`
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  background: rgb(11, 212, 162);
`;

export const BtnTrash = styled(BtnComplete)`
  background: #ff6f47;
`;
