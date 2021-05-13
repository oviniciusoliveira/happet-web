import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 2rem;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.tertiary};

  .leaflet-container {
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    overflow: hidden;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;

  padding: 1.5rem 0;

  strong {
    font-size: 2rem;
  }

  div {
    display: flex;
    margin-left: 2rem;

    a {
      display: flex;
      justify-content: center;
      border: 0;
      padding: 1.2rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      cursor: pointer;
      transition: all 0.2 ease-in-out;

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    a + a {
      margin-left: 1rem;
    }
  }
`;
