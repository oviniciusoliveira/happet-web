import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "./../images/logo.png";
import { Logo, LogoImg } from "../styles/components/logo";
import { Container } from "./../styles/components/sidebar";

function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Container>
      <Logo>
        <LogoImg src={logoImg} alt="Happet" />
      </Logo>
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Container>
  );
}

export default Sidebar;
