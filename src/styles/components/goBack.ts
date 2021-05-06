import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 3rem;
  right: 5rem;

  background-color: #ff1a73;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  
  padding: 1.5rem;
  border-radius: 1.5rem;

  color: white;

  &:hover {
    background-color: #4aade5;
    transition: all 0.2s ease-in-out;
  }
`;
