import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 10rem;
`;

export const AcceptContainer = styled.div`
  width: 100%;

  display: flex;

  margin-top: 4rem;

  button {
    cursor: pointer;
    height: 6.4rem;
    border: 0;
    background-color: ${({theme}) => theme.colors.buttonBackground};
    border-radius: 2rem;
    color: ${({theme}) => theme.colors.white};
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    transition: all 0.2 ease-in-out;

    svg {
      margin-right: 1.6rem;
    }

    &.reject-button {
      background-color: ${({theme}) => theme.colors.pinkMedium};
    }

    :hover {
      filter: brightness(0.8);
    }
    :active {
      transform: scale(0.9);
    }

    &:first-child {
        margin-right: 2rem;
    }
  }
`;
