import {
  Container,
  FormWrapper,
} from "./../styles/pages/signin";
import SidePanel from "./../components/SidePanel";
import {
  ConfirmButton,
  Fieldset,
  Form,
  InputBlock,
  InputPasswordBlock,
} from "../styles/global";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import GoBack from "./../components/GoBack";
import api from "../services/api";
import { toast } from "react-toastify";

function SignIn() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleSignUp() {
    if (password.length >= 6) {
      if (password === confirmPassword) {
        try {
          const { data } = await api.post("/users", {
            name,
            email,
            password,
          });

          if (data.success) {
            toast.success(data.success);
            history.push("/signin");
          } else if (data.error) {
            toast.warn(data.error);
          }
        } catch (error) {
          toast.error("Não foi possível realizar o cadastro");
        }
      } else {
        toast.warn("As senhas não coincidem");
      }
    } else {
      toast.warn("A senha deve ter no mínimo 6 caracteres");
    }
  }

  return (
    <>
      <GoBack route="/signin" />
      <Container>
        <SidePanel />
        <FormWrapper>
          <Form>
            <Fieldset>
              <legend>Cadastrar Novo Usuário</legend>
              <InputBlock>
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputBlock>
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      size={20}
                    />
                  ) : (
                    <FiEye
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      size={20}
                    />
                  )}
                </div>
              </InputPasswordBlock>
            </Fieldset>
            <ConfirmButton onClick={handleSignUp}>Cadastrar</ConfirmButton>
          </Form>
        </FormWrapper>
      </Container>
    </>
  );
}

export default SignIn;
