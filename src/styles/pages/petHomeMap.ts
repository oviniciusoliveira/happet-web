import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    padding: 0 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;

    .leaflet-container {
      min-height: 450px;
    }
  }

`;

export const Aside = styled.aside`
  width: 44rem;
  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundGradient} 100%
  );
  padding: 4rem 4rem 2rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    border: 0;
    padding: 1.5rem;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secundary};
    }
  }

  @media screen and (max-width: 1080px) {
    width: 100%;


    button {
      display: none;
    }

  }

`;

export const Header = styled.header`
  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem;
  }

  p {
    margin-top: 2.4rem;
    line-height: 2.8rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 2.4rem;

  strong {
    font-weight: 800;
  }

  @media screen and (max-width: 1080px) {
    align-items: flex-end;
  }
`;

export const CreatePetHome = styled(Link)`
  position: absolute;
  right: 4rem;
  bottom: 4rem;

  width: 6.4rem;
  height: 6.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  transition: background-color 0.2s;

  &:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors.secundary};
  }
`;
