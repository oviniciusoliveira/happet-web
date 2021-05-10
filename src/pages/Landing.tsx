import {
  Container,
  Content,
  Main,
  Location,
  Enter,
  RegisterButton,
} from "./../styles/pages/landing";
import { Logo, LogoImg } from "./../styles/components/logo";

import { FiArrowRight } from "react-icons/fi";
import logoImg from "./../images/logo.png";

import { Link } from "react-router-dom";
function Landing() {
  return (
    <Container>
      <Content>
        <Logo>
          <LogoImg src={logoImg} className="logoImg" alt="Happet" />
          <strong>Happet</strong>
        </Logo>
        <Main>
          <h1>Adote um animal de estimação</h1>
          <p>Encontre um ponto de adoção perto de você</p>
          <Link to="signin">
            <RegisterButton>Acesso Restrito</RegisterButton>
          </Link>
        </Main>
        <Location>
          <strong>Liberdade</strong>
          <span>São Paulo</span>
        </Location>
        <Link to="/app">
          <Enter>
            <FiArrowRight size={26} color="white" />{" "}
          </Enter>
        </Link>
      </Content>
    </Container>
  );
}

export default Landing;
