import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;

  p { 
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;


export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: 1080px) {
    flex-grow: 1;
    justify-content: center;

  }
`;
