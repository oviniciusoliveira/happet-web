import { useHistory } from "react-router";

import {
  Container,
  ContentWrapper,
  Main,
  ImageDiv,
} from "./../styles/pages/successRegistration";

import successPetHomeImage from "./../images/success-pet-home.svg";

function SuccessRegistration() {
  const history = useHistory();
  return (
    <Container>
      <ContentWrapper>
        <Main>
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado.
          </p>
          <p>Agora é só esperar :&#41;</p>
          <div className="buttons">
            <button onClick={() => history.push("/app")}>
              Voltar para o Mapa
            </button>
          </div>
        </Main>
        <ImageDiv>
          <img src={successPetHomeImage} alt="Delete Pet Home" />
        </ImageDiv>
      </ContentWrapper>
    </Container>
  )
}

export default SuccessRegistration;
