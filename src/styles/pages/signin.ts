import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const RememberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  color: ${({theme}) => theme.colors.formColor};
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    input {
      margin-right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
`;
