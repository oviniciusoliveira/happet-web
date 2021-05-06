import { Container } from "./../styles/components/sidepanel";
import LogoComTexto from "./../components/LogoComTexto";
function SidePanel() {
  return (
    <Container>
      <LogoComTexto />
      <strong>São Paulo</strong>
      <span>Liberdade</span>
    </Container>
  );
}

export default SidePanel;
