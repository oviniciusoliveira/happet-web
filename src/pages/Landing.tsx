import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "styled-components";

import {
  Container,
  Content,
  Header,
  LandingImage,
  MainAndImage,
  Main,
  LocationAndTheme,
  Location,
  Footer,
  Enter,
  RegisterButton,
} from "./../styles/pages/landing";
import LogoComTexto from "./../components/LogoComTexto";

import Switch from "react-switch";
import { FiArrowRight } from "react-icons/fi";
import landing from "./../images/landing.png";
import { shade } from "polished";

interface LandingProps {
  toggleTheme(): void;
}

function Landing({ toggleTheme }: LandingProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <Header>
          <LogoComTexto />
          <LocationAndTheme>
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
            <Location>
              <strong>Liberdade</strong>
              <span>São Paulo</span>
            </Location>
          </LocationAndTheme>
        </Header>
        <MainAndImage>
          <Main>
            <h1>Adote um animal de estimação</h1>
            <p>Encontre um ponto de adoção perto de você</p>
          </Main>
          <LandingImage
            src={landing}
            alt="Desenho de um gachorro, gato, pássaro e um peixe no áquario"
          />
        </MainAndImage>
        <Footer>
          <Link to="signin">
            <RegisterButton>Acesso Restrito</RegisterButton>
          </Link>
          <Link to="/app">
            <Enter>
              <FiArrowRight size={26} color="white" />
            </Enter>
          </Link>
        </Footer>
      </Content>
    </Container>
  );
}

export default Landing;
