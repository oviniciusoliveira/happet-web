import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 3rem;
  right: 5rem;

  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease-in-out;

  cursor: pointer;

  padding: 1.5rem;
  border-radius: 1.5rem;

  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
