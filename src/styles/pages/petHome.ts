import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;

    main {
      padding: 1rem;
    }
  }
`;

export const Details = styled.div`
  width: 70rem;
  margin: 6.4rem auto;

  background: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderFormColor};
  border-radius: 2rem;

  overflow: hidden;

  > img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  @media screen and (max-width: 1080px) {
    max-width: 100%;
  }  
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.6rem;

  margin: 1.6rem 4rem 0;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
    margin: 1.6rem;
    margin-bottom: 0;
  }  
`;

export const ImageButton = styled.button`
  border: 0;
  height: 8.8rem;
  background: none;
  cursor: pointer;
  border-radius: 2rem;
  overflow: hidden;
  outline: none;

  opacity: 0.6;

  &.active {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 8.8rem;
    object-fit: cover;
  }
`;

export const DetailsContent = styled.div`
  padding: 8rem;

  h1 {
    color: ${({ theme }) => theme.colors.formColor};
    font-size: 5.4rem;
    line-height: 5.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 2.8rem;
    color: ${({ theme }) => theme.colors.formColor};
    margin-top: 2.4rem;
  }

  .leaflet-container {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderFormColor};
  }

  .map-container {
    margin-top: 6.4rem;
    background-color: ${({ theme }) => theme.colors.secundaryLight};
    border: 1px solid ${({ theme }) => theme.colors.borderFormColor};
    border-radius: 2rem;
    overflow: hidden;

    footer {
      padding: 2rem 0;
      text-align: center;

      a {
        line-height: 2.4rem;
        color: ${({ theme }) => theme.colors.formColor};
        text-decoration: none;
      }
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: ${({ theme }) => theme.colors.borderFormColor};
    margin: 6.4rem 0;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: ${({ theme }) => theme.colors.formColor};
  }
  @media screen and (max-width: 1080px) {
    padding: 2rem;
    margin-top: 4rem;
  }

`;

export const OpenDetails = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  div {
    padding: 3.2rem 2.4rem;
    border-radius: 2rem;
    line-height: 2.8rem;
    svg {
      display: block;
      margin-bottom: 2rem;
    }
  }

  div.hour {
    background: linear-gradient(
      149.97deg,
      ${({theme}) => theme.colors.secundaryLight} 90.85%,
      ${({ theme }) => theme.colors.white} 100%
    );
    border: 1px solid ${({theme}) => theme.colors.secundary};
    color: ${({theme}) => theme.colors.formColor};
  }

  div.open-on-weekends {
    background: linear-gradient(
      154.16deg,
      ${({theme}) => theme.colors.buttonBackgroundLight} 90.85%,
      ${({ theme }) => theme.colors.white} 100%
    );
    border: 1px solid ${({theme}) => theme.colors.buttonHoverBackground};
    color: ${({theme}) => theme.colors.buttonBackground};
  }

  div.open-on-weekends.dont-open {
    background: linear-gradient(154.16deg, ${({theme}) => theme.colors.pinkLight} 90.85%, ${({theme}) => theme.colors.white} 100%);
    border: 1px solid ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
  }
`;
