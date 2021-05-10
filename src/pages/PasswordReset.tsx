import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import GoBack from "../components/GoBack";
import SidePanel from "../components/SidePanel";
import api from "../services/api";
import {
  ConfirmButton,
  Fieldset,
  Form,
  InputBlock,
  InputPasswordBlock,
} from "../styles/global";
import { Container, FormWrapper } from "./../styles/pages/forgotPassword";

function PasswordReset() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const history = useHistory();

  const handleResetPassword = async () => {
    if (password.length >= 6) {
      if (password === confirmPassword) {
        try {
          const { data } = await api.post("/reset-password", {
            token,
            email,
            password,
          });
          console.log(data);
          if (data.success) {
            toast.success(data.success);
            history.push("/signin");
          } else if (data.error) {
            toast.warn(data.error);
          }
        } catch (error) {
          toast.error("Não foi possível redefinir a senha");
        }
      } else {
        toast.warn("As senhas não coincidem");
      }
    } else {
      toast.warn("A senha deve ter no mínimo 6 caracteres");
    }
  };

  return (
    <>
      <GoBack route="/forgot-password" />
      <Container>
        <SidePanel />
        <FormWrapper>
          <Form>
            <Fieldset>
              <legend>Redefinir Senha</legend>
              <p>
                Insira seu Token e escolha uma nova senha para acessar o
                dashboard do Happet
              </p>
              <InputBlock>
                <label htmlFor="token">Token</label>
                <input
                  id="token"
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </InputBlock>
              <InputBlock>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
              <InputPasswordBlock>
                <label htmlFor="confirm-password">Confirmar Senha</label>
                <div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                  {showConfirmPassword ? (
                    <FiEyeOff
                      color="#eea0ae"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      size={20}
                    />
                  ) : (
                    <FiEye
                      color="#eea0ae"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      size={20}
                    />
                  )}
                </div>
              </InputPasswordBlock>
              <ConfirmButton onClick={handleResetPassword}>
                Redefinir Senha
              </ConfirmButton>
            </Fieldset>
          </Form>
        </FormWrapper>
      </Container>
    </>
  );
}

export default PasswordReset;
