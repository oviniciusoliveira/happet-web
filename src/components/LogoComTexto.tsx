import { useHistory } from "react-router";
import { Logo, LogoImg } from "../styles/components/logo";

function LogoComTexto() {
  const history = useHistory();
  return (
    
    <Logo onClick={() => history.push("/") }>
      <LogoImg/>
      <strong className="logoText">Happet</strong>
    </Logo>
  );
}

export default LogoComTexto;
