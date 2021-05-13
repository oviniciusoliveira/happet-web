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
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import GoBack from "./../components/GoBack";
import { useAuth } from "./../contexts/auth";
import crypto from "crypto-js";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginSaved, setIsLoginSaved] = useState(false);
  const { signIn, loading } = useAuth();

  // ComponentDidMount
  useEffect(() => {
    function getUserLogin() {
      const storagedLoginEmail = localStorage.getItem("@happet-login-email");
      const storagedLoginPassword = localStorage.getItem(
        "@happet-login-password"
      );
      if (storagedLoginEmail && storagedLoginPassword) {
        const crypto_key = process.env.REACT_APP_CRYPTO_KEY || "";
        const bytes = crypto.AES.decrypt(
          JSON.parse(storagedLoginPassword),
          crypto_key
        );
        const decryptedPassword = bytes.toString(crypto.enc.Utf8);
        setEmail(JSON.parse(storagedLoginEmail));
        setPassword(decryptedPassword);
        setIsLoginSaved(true);
      }
    }

    getUserLogin();
  }, []);

  async function handleLogin() {
    const isLoginSucceded = await signIn({ email, password });

    if (isLoginSucceded) {
      if (isLoginSaved) {
        const crypto_key = process.env.REACT_APP_CRYPTO_KEY || "";
        const encryptedPassword = crypto.AES.encrypt(
          password,
          crypto_key
        ).toString();
        localStorage.setItem("@happet-login-email", JSON.stringify(email));
        localStorage.setItem(
          "@happet-login-password",
          JSON.stringify(encryptedPassword)
        );
      } else {
        localStorage.removeItem("@happet-login-email");
        localStorage.removeItem("@happet-login-password");
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
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                    />
                  ) : (
                    <FiEye
                      onClick={() => setShowPassword(!showPassword)}
                      size={20}
                    />
                  )}
                </div>
              </InputPasswordBlock>
            </Fieldset>
            <RememberContainer>
              <span>
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={isLoginSaved}
                  onChange={(e) => setIsLoginSaved(e.target.checked)}
                />
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
