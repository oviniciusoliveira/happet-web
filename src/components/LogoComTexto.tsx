import { Logo, LogoImg } from "../styles/components/logo";
import logoImg from "./../images/logo.png";

function LogoComTexto() {
  return (
    <Logo>
      <LogoImg src={logoImg} className="logoImg" alt="Happet" />
      <strong>Happet</strong>
    </Logo>
  );
}

export default LogoComTexto;
