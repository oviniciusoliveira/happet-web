import {
  Container,
  FormWrapper,
  RememberContainer,
} from "./../styles/pages/signin";
import SidePanel from "./../components/SidePanel";
import Loading from "./../components/Loading";
import {
  ConfirmButton,
  Fieldset,
  Form,
  InputBlock,
  InputPasswordBlock,
} from "../styles/global";
import React, { useState, useContext } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import GoBack from "./../components/GoBack";
import { useAuth } from "./../contexts/auth";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginSaved, setIsLoginSaved] = useState(false);
  const { signIn, loading } = useAuth();

  async function handleLogin() {
    const isLoginSucceded = await signIn({ email, password });

    if (isLoginSucceded) {
      if (isLoginSaved) {
      }
    }
  }

  return (
    <>
      <GoBack route="/" />
      {loading && <Loading />}
      <Container>
        <SidePanel />
        <FormWrapper>
          <Form>
            <Fieldset>
              <legend>Fazer Login</legend>
              <InputBlock>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                ></input>
              </InputBlock>
              <InputPasswordBlock>
                <label htmlFor="password">Senha</label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  {showPassword ? (
                    <FiEyeOff
                      color="#eea0ae"
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                    />
                  ) : (
                    <FiEye
                      color="#eea0ae"
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                    />
                  )}
                </div>
              </InputPasswordBlock>
            </Fieldset>
            <RememberContainer>
              <span>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Lembrar-me</label>
              </span>
              <p>
                <Link to="forgot-password">Esqueci minha senha</Link>
              </p>
            </RememberContainer>
            <ConfirmButton onClick={handleLogin}>Entrar</ConfirmButton>
            <strong
              onClick={() => history.push("/signup")}
              className="register"
            >
              Cadastrar-se
            </strong>
          </Form>
        </FormWrapper>
      </Container>
    </>
  );
}

export default SignIn;
