import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    330deg,
    hsla(349, 70%, 78%, 1) 0%,
    hsla(349, 74%, 82%, 1) 100%
  );

  font-size: 2rem;

  & > div {
      margin-bottom: 5rem;
  }
`;
