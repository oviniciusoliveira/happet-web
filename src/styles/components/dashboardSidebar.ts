import styled from "styled-components";

export const Container = styled.aside`
  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundGradient} 100%
  );

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  padding: 3rem 1rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.8rem;
    height: 4.8rem;

    border: none;
    border-radius: 1.6rem;

    cursor: pointer;

    background-color: ${({theme}) => theme.colors.primary};
    transition: all 0.2s ease-in-out;

    &.active {
      background-color: ${({theme}) => theme.colors.secundary};

      svg {
        color: ${({theme}) => theme.colors.white};
      }
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.secundary};
      svg {
        color: ${({theme}) => theme.colors.white};
      }
    }
  }
  @media screen and (max-width: 1080px) {
    position: static;
    flex-direction: row;
    height: auto;
  }

`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  button + button {
    margin-top: 1.6rem;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: row;
    button + button {
    margin-left: 1.6rem;
    margin-top: 0;
  }
  }

`;

export const Footer = styled.footer`
  display: flex;
`;
