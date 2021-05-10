import styled, { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    color: #353535;
    background-color: #f5ebf3;
}

body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

.Toastify__toast {
      border-radius: 10px;
    }
`;

export const InputBlock = styled.div`
  label {
    display: flex;
    color: #5c8599;
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: #5c8599;
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 2rem;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
    margin-bottom: 1rem;
  }

  textarea {
    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
    padding: 1.6rem;
    line-height: 2.8rem;
  }

  .new-image {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed rgb(255, 26, 115);
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  input[type="file"] {
    display: none;
  }
`;

export const InputPasswordBlock = styled.div`
  label {
    display: flex;
    color: #5c8599;
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: #5c8599;
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  div {
    position: relative;
    display: flex;
  }

  div input {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 2rem;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  svg {
    position: absolute;
    top: 33%;
    right: 2rem;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  strong.register {
    display: flex;
    align-self: center;
    margin-top: 3rem;
    font-size: 2rem;
    color: #5c8599;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 4.4rem;
  width: 100%;
  height: 6.4rem;
  border: 0;
  cursor: pointer;
  border-radius: 2rem;
  color: #ffffff;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  background-color: #3cdc8c;
  svg {
    margin-right: 1.6rem;
  }
  :hover {
    background-color: #3EE08F;
  }
  :active {
    transform: scale(0.9);
  }
`;

export const Fieldset = styled.div`
  legend {
    font-size: 3.2rem;
    line-height: 3.4rem;
    color: #5c8599;
    font-weight: 700;
    margin-bottom: 1.5rem;
    padding-bottom: 2.4rem;
  }
`;
