import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin-top: 64px;
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.buttonBackground};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  & > svg {
    margin-right: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHoverBackground};
  }
`;
