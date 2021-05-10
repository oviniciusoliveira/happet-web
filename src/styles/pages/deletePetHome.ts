import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ff669d;
  display: flex;
  
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
  max-width: 400px;
  text-align: center;

  color: white;
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
        background-color: #ff669d;
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
