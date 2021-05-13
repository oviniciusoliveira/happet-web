import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "styled-components";

import {
  Container,
  Content,
  Main,
  Location,
  Enter,
  RegisterButton,
} from "./../styles/pages/landing";
import { Logo, LogoImg } from "./../styles/components/logo";

import Switch from "react-switch";
import { FiArrowRight } from "react-icons/fi";
import { shade } from "polished";

import logoImg from "./../images/logo.png";

interface LandingProps {
  toggleTheme(): void;
}

function Landing({ toggleTheme }: LandingProps) {
  const { colors, title } = useContext(ThemeContext);

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
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            handleDiameter={25}
            width={50}
            onColor={shade(0.2, colors.secundary)}
            offColor={colors.primary}
          />
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
