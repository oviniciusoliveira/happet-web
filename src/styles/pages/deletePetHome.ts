import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #FF669D;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 5rem 15rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  max-width: 420px;
  text-align: center;

  color: ${({theme}) => theme.colors.tertiary};
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 8rem;
  }

  p {
    font-size: 2.5rem;
  }

  .buttons {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    button {
      width: 100%;
      max-width: 24rem;

      color: inherit;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: 2rem;

      background-color: #d6487b;

      cursor: pointer;

      padding: 1.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1.1);
      }

      &:active {
        transform: scale(0.9);
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const ImageDiv = styled.div``;
