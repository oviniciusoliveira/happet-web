import { useState } from "react";
import SidePanel from "../components/SidePanel";
import { ConfirmButton, Fieldset, Form, InputBlock } from "../styles/global";
import { Container, FormWrapper } from "./../styles/pages/forgotPassword";
import api from "./../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import GoBack from "../components/GoBack";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleForgotPassword = async () => {
    try {
      const { data } = await api.post("/forgot-password", { email });
      if (data.success) {
        toast.success(data.success);
        history.push("/password-reset");
      } else if (data.error) {
        toast.warn(data.error);
      }
    } catch (error) {
      toast.error("Não conseguimos enviar o email");
    }
  };

  return (
    <>
      <GoBack route="/signin" />
      <Container>
        <SidePanel />
        <FormWrapper>
          <Form>
            <Fieldset>
              <legend>Esqueci a Senha</legend>
              <p>
                Para redefinir sua senha, insira o e-mail cadastrado e siga as
                instruções que enviaremos por lá!
              </p>
              <InputBlock>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputBlock>
              <ConfirmButton onClick={handleForgotPassword}>
                Enviar
              </ConfirmButton>
            </Fieldset>
          </Form>
        </FormWrapper>
      </Container>
    </>
  );
}

export default ForgotPassword;
