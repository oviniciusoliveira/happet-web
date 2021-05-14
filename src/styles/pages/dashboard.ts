import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem;

  margin-left: 6rem;

  @media screen and (max-width: 1080px) {
    margin-left: 0;
    padding: 2rem;
  }
`;

export const PetHomesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  padding-bottom: 5rem;
  display: grid;
  grid-gap: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
