import {
  Container,
  Nav,
  Footer,
} from "./../styles/components/dashboardSidebar";

import { FiMapPin, FiInfo, FiPower } from "react-icons/fi";
import logoImg from "./../images/logo.png";

import { useAuth } from "./../contexts/auth";
import { useDashboard } from "./../contexts/dashboard";

import { toast } from "react-toastify";
import { useHistory } from "react-router";

function DashboardSidebar() {
  const { signOut } = useAuth();
  const { page, setPage } = useDashboard();
  const history = useHistory();

  function handlePage(page: string) {
      history.push(`/${page}`);
    setPage(page);
  }

  function handleLogout() {
    signOut();
    toast.success("Sessão Finalizada");
    history.push("/");
  }

  return (
    <Container>
      <img src={logoImg} alt="Happet" />
      {console.log(page)}
      <Nav>
        <button type="button" onClick={(e) => {
          console.log();
          handlePage("accepted-pet-homes")
        }} className={page === "accepted-pet-homes" ? "active" : ""}>
          <FiMapPin size={28} />
        </button>
        <button type="button" onClick={() => handlePage("pending-pet-homes")} className={page === "pending-pet-homes" ? "active" : ""}>
          <FiInfo size={28} />
        </button>
      </Nav>
      <Footer>
        <button type="button" onClick={handleLogout}>
          <FiPower size={28} />
        </button>
      </Footer>
    </Container>
  );
}

export default DashboardSidebar;
