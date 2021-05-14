import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundGradient} 100%
  );

  font-size: 2rem;

  & > div {
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 1080px) {
    padding: 1rem;
    & > div {
      margin-bottom: 0;
    }
    & > span, & > strong  {
      display: none;
    }
  }
`;
