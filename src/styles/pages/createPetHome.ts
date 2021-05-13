import styled from "styled-components";
import { InputBlock } from "../global";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  border: 0;

  + fieldset {
    margin-top: 8rem;
  }

  legend {
    width: 100%;

    font-size: 3.2rem;
    line-height: 3.4rem;
    color: ${({ theme }) => theme.colors.formColor};
    font-weight: 700;

    border-bottom: 1px solid ${({ theme }) => theme.colors.borderFormColor};
    margin-bottom: 4rem;
    padding-bottom: 2.4rem;
  }
`;

export const Form = styled.form`
  width: 70rem;
  margin: 6.4rem auto;

  background: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderFormColor};
  border-radius: 2rem;

  padding: 6.4rem 8rem;

  overflow: hidden;

  .leaflet-container {
    margin-bottom: 4rem;
    border: 1px solid ${({ theme }) => theme.colors.borderFormColor};
    border-radius: 2rem;
  }

  ${Fieldset} + ${Fieldset} {
    margin-top: 8rem;
  }
  ${InputBlock} + ${InputBlock} {
    margin-top: 2.4rem;
  }
`;

export const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 6.4rem;
    background: ${({theme}) => theme.colors.tertiary};
    border: 1px solid ${({theme}) => theme.colors.borderFormColor};
    color: ${({theme}) => theme.colors.formColor};
    cursor: pointer;
  }

  button.active {
    background: ${({theme}) => theme.colors.secundary};
    border: 1px solid ${({theme}) => theme.colors.borderFormColor};
    color: ${({theme}) => theme.colors.tertiary};
  }

  button:first-child {
    border-radius: 2rem 0 0 2rem;
  }

  button:last-child {
    border-radius: 0 2rem 2rem 0;
    border-left: 0;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.6rem;
`;

export const ImagePreview = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 96px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: ${({theme}) => theme.colors.tertiary};
    padding: 10px;
    padding-bottom: 5px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 20px;
    border: 0;
    cursor: pointer;
    transition: all 0.2s;

    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;

    &:hover {
      background-color: ${({theme}) => theme.colors.backgroundLight};
    }
  }
  svg {
    color: ${({theme}) => theme.colors.primary};
  }
`;
