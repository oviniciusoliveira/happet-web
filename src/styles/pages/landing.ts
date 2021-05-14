import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundGradient} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  @media screen and (max-width: 1080px) {
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 110rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 60rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (max-width: 1080px) {

    .logoText {
      display: none;
    }
  }
`

export const LocationAndTheme = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`

export const Location = styled.div`

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  text-align: right;

  strong {
    margin-top: 0.5rem;
    font-weight: 800;
  }

  svg {
    cursor: pointer;
  }
`;

export const MainAndImage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  flex-grow: 1;
  max-height: 60rem;
  align-items: center;

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
  }
`

export const Main = styled.main`
  max-width: 36rem;
  

  h1 {
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 7rem;
  }

  p {
    margin-top: 4rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
  @media screen and (max-width: 1080px) {
    padding: 1rem;
    h1 {
      font-size: 4.6rem;
      line-height: 4.6rem;
    }
  }
`;

export const LandingImage = styled.img`
    max-width: 350px;

    @media screen and (max-width: 700px) {
      display: none;
    }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`

export const RegisterButton = styled.div`
  padding: 2rem 6rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors.secundary};
  }

  @media screen and (max-width: 700px) {
    padding: 1rem 3rem;
    font-size: 1.8rem;
  }
`;

export const Enter = styled.div`
  width: 7rem;
  height: 7rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundary};
    transition: background-color 0.2s;
  }
  @media screen and (max-width: 700px) {
    width: 5rem;
    height: 5rem;
    border-radius: 2rem;
  }
`;
