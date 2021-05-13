import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 3rem 1rem;
  background: linear-gradient(
    330deg,
    ${({theme}) => theme.colors.background} 0%,
    ${({theme}) => theme.colors.backgroundGradient} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  footer a,
  footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({theme}) => theme.colors.secundary};
    }
  }
`;
