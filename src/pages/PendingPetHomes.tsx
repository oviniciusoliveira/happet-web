import { useEffect } from "react";
import api from "../services/api";
import { Container, Main } from "./../styles/pages/dashboard";
import { DashboardHeader } from "./../styles/components/dashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

function PendingPetHomes() {
  useEffect(() => {
    async function getPetHomes() {
      const { data } = await api.get("/pet-homes");
      console.log(data);
    }
    getPetHomes();
  }, []);

  return (
    <Container>
      <DashboardSidebar />
      <Main>
        <DashboardHeader>PENDING PET HOMES</DashboardHeader>
      </Main>
    </Container>
  );
}

export default PendingPetHomes;
